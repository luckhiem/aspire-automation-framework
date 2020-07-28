const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js')

const FORM_SELECT = '.new-form__view';
const ACRA_METHOD_BTN = '.q-pb-md button';
const MANUAL_VERIFY_BTN = '.q-mt-lg button';

class MethodSelect {
    acccessMethodSelectPage() {
        BrowserHandler.navigate(CONFIG.PATH.SELECT_METHOD_URL);
        ElementHandler.verifyURL(CONFIG.PATH.SELECT_METHOD_URL);
        ElementHandler.waitForElementDisplayed(FORM_SELECT)
        return this;
    }

    selectACRAMethod() {
        ElementHandler.click(ACRA_METHOD_BTN);
        return this;
    }

    selectManualVerifyMethod() {
        Common.waitForPageLoading()
        ElementHandler.click(MANUAL_VERIFY_BTN);
        return this;
    }

    selectMethod(){
        this.acccessMethodSelectPage();
        Common.waitForPageLoading();
        this.selectACRAMethod();
        this.selectManualVerifyMethod();
        Common.waitForPageLoading()
    }
}

module.exports = new MethodSelect();
