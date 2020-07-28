import Common from '../../common/Common';
import CONFIG from '../../config';
import ElementHandler from '../../common/ElementHandler';
import BrowserHandler from '../../common/BrowserHandler';

const FORM_SELECT = '.new-form__view';
const ACRA_METHOD_BTN = '.q-pb-md button';
const MANUAL_VERIFY_BTN = '.q-mt-lg button';

class MethodSelect {
    accessMethodSelectPage() {
        BrowserHandler.navigate(CONFIG.PATH.SELECT_METHOD_URL);
        ElementHandler.verifyURL(CONFIG.PATH.SELECT_METHOD_URL);
        ElementHandler.waitForElementDisplayed(FORM_SELECT);
        return this;
    }

    selectACRAMethod() {
        ElementHandler.click(ACRA_METHOD_BTN);
        return this;
    }

    selectManualVerifyMethod() {
        Common.waitForPageLoading();
        ElementHandler.click(MANUAL_VERIFY_BTN);
        return this;
    }

    selectMethod() {
        this.accessMethodSelectPage();
        Common.waitForPageLoading();
        this.selectACRAMethod();
        this.selectManualVerifyMethod();
        Common.waitForPageLoading();
    }
}

export default new MethodSelect();
