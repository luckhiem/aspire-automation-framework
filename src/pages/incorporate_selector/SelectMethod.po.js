const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');

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

    _waitForPageLoading() {
        const LOADING_LOCATOR = ".q-loading-bar";
        $(LOADING_LOCATOR).waitUntil(function () {
            return ElementHandler.verifyAttribute(LOADING_LOCATOR, 'aria-hidden', true)

        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });

    }

    selectACRAMethod() {
        ElementHandler.click(ACRA_METHOD_BTN);
        return this;
    }

    selectManualVerifyMethod() {
        this._waitForPageLoading()
        ElementHandler.click(MANUAL_VERIFY_BTN);
        browser.pause(5000)
        return this;
    }
}

module.exports = new MethodSelect();
