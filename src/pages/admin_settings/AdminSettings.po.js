const ElementHandler = require('../../common/ElementHandler');

const ICON_SETTINGS = '.icon-people-setting';
const PAGE_INDEX = '#content-container';

class AdminSettings {
    openPage() {
        ElementHandler.click(ICON_SETTINGS);
        ElementHandler.waitForElement(PAGE_INDEX);
        ElementHandler.verifyElementExisting(PAGE_INDEX);
        return this;
    }
}

module.exports = new AdminSettings();
