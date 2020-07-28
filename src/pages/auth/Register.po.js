import Common from '../../common/Common';
import CONFIG from '../../config';
import ElementHandler from '../../common/ElementHandler';
import BrowserHandler from '../../common/BrowserHandler';

const PERSON_NAME_TXB = 'input[data-cy="register-person-name"]';
const EMAIL_TXB = 'input[data-cy="register-person-email"]';
const PHONE_NUMBER_TXB = 'input[data-cy="register-person-phone"]';
const HEARD_ABOUT_DRD = 'div[data-cy="register-person-heard-about"]';
const PRIVACY_CBX = 'div[data-cy="register-person-privacy"]';
const CONTINUE_BTN = '.aspire-button--cta';

class Register {
    open() {
        browser.deleteCookies();
        BrowserHandler.maximizeWindow();
        BrowserHandler.navigate(CONFIG.PATH.REGISTER_URL);
        ElementHandler.verifyURL(CONFIG.PATH.REGISTER_URL);
        return this;
    }

    /**
     * @param {String} name //name of person registered
     */
    inputPersonName(name) {
        ElementHandler.addValue(PERSON_NAME_TXB, name);
        return this;
    }

    /**
     * @param {String} email //email of person registered
     */
    inputEmail(email) {
        ElementHandler.addValue(EMAIL_TXB, email);
        return this;
    }

    /**
     * @param {Number} phoneNumber //phoneNumber of person registered
     */
    inputPhoneNumber(phoneNumber) {
        ElementHandler.addValue(PHONE_NUMBER_TXB, phoneNumber);
        return this;
    }

    /**
     * @param {String} item //item heard about select
     */
    selectPersonHeardAbout(item) {
        const HEARD_ABOUT_CHANNEL = `//div[@class='q-item__label'][text()="${item.channel}"]`;
        const HEARD_ABOUT_DETAIL_TXB = 'input[data-cy="register-person-heard-about-details"]';
        Common.waitForPageLoading();
        ElementHandler.click(HEARD_ABOUT_DRD);
        ElementHandler.click(HEARD_ABOUT_CHANNEL);
        if (item.referenceCode !== null || item.referenceCode !== undefined) {
            ElementHandler.addValue(HEARD_ABOUT_DETAIL_TXB, item.referenceCode);
        }
        return this;
    }

    stickOnPrivacyCheckbox() {
        ElementHandler.click(PRIVACY_CBX);
        return this;
    }

    clickContinueBtn() {
        ElementHandler.click(CONTINUE_BTN);
        return this;
    }

    verifyAccountExists() {
        const ACCOUNT_EXISTS_LOCATOR = '.q-card .text-subtitle1';
        const ErrorMessage = 'Account exists, try login instead!';
        ElementHandler.waitForElementDisplayed(ACCOUNT_EXISTS_LOCATOR);
        ElementHandler.verifyText(ACCOUNT_EXISTS_LOCATOR, ErrorMessage);
        return this;
    }

    /**
     * @param {User} user
     */
    registerUser(user) {
        Common.waitForPageLoading();
        this.inputPersonName(user.name);
        this.inputEmail(user.email);
        this.inputPhoneNumber(user.phone);
        this.selectPersonHeardAbout(user.heard_about);
        this.stickOnPrivacyCheckbox();
        this.clickContinueBtn();
        Common.waitForPageLoading();
        return this;
    }
}

export default new Register();
