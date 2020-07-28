const path = require("path");

const file = path.join(__dirname, './resource/test-stream.y4m')
exports.config = {
    runner: 'local',
    host: 'localhost',
    specs: [
        './src/test_scripts/test.test.js',
    ],
    services: ['selenium-standalone'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            args: [
                '--headless',
                '--disable-gpu',
                '--use-fake-ui-for-media-stream',
                '--use-fake-device-for-media-stream',
                `--use-file-for-fake-video-capture=${file}`,
            ],
            prefs: {
                "profile.default_content_setting_values.media_stream_camera": 1
            }
        }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 900000
    },
    reporters: [
        'spec', 
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    before() {
        browser.setWindowSize(1440, 900);
    },
    afterTest(test) {
        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        const filePath = path.resolve(__dirname, './resource/test.png');
        browser.saveScreenshot(filePath);
    }
}
