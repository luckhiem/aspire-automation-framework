class BrowserHandling {
    /**
   * @param {string} url    url for navigate
   */
    navigate(url) {
        browser.url(url);
    }

    maximizeWindow() {
        browser.maximizeWindow();
    }

    /**
   * @param {int=} window    window to focus
   */
    switchWindow(title) {
        // Handle 'Redirecting' window
        browser.pause(3000);

        var windows = browser.getTabIds();
        for (var i = 0; i <= windows.length; i++) {
            browser.switchTab(windows[i]);
            if (browser.getTitle().includes(title)) {
                break;
            }
        }
    }
}
module.exports = new BrowserHandling();