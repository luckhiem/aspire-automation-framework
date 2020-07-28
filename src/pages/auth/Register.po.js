const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js')

const PERSON_NAME_TXB = 'input[data-cy="register-person-name"]';
const EMAIL_TXB = 'input[data-cy="register-person-email"]';
const PHONE_NUMBER_TXB = 'input[data-cy="register-person-phone"]';
const HEARD_ABOUT_DRD = 'div[data-cy="register-person-heard-about"]';
const PRIVACY_CBX = 'div[data-cy="register-person-privacy"]';
const OTP_TXB = 'input[data-cy="digit-input-pin"]';
const VERIFY_OTP_BTN = 'button[data-cy="verify-otp-submit"]';
const CONTINUE_BTN = '.aspire-button--cta';
const TITLE_LOCATOR = "div.q-mb-md";
const DESCRIPTION_LOCATOR = "p.q-mb-xl";

class RegisterPage {
    open() {
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
        ElementHandler.addValue(PERSON_NAME_TXB, email);
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
        ElementHandler.click(HEARD_ABOUT_DRD);
        ElementHandler.click(HEARD_ABOUT_CHANNEL);
        if (item.detail !== null || item.detail !== undefined) {
            ElementHandler.addValue(HEARD_ABOUT_DETAIL_TXB, item.detail);
        }
        return this;
    }

    /**
     * @param {Int} otp //otp generate
     */
    verfiyOTPCode(otp) {
        Common.waitForPageLoading();
        ElementHandler.setValue(OTP_TXB, otp);
        ElementHandler.click(VERIFY_OTP_BTN);
        return this;
    }

    verifyPageAfterRegisterSuccess() {
        const TITLE_TEXT = "Wohoo!";
        const DESCRIPTION_TEXT = "You have successfully verified your phone number. You’re on to a great start!"
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, TITLE_TEXT);
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, DESCRIPTION_TEXT)
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

    /**
     * @param {User} user
     */
    registerUser(user) {
        Common.waitForPageLoading();
        this.inputPersonName(user.name);
        this.inputEmail(user.email);
        this.inputPhoneNumber(user.phone);
        this.selectPersonHeardAbout(user.heard_about)
        this.stickOnPrivacyCheckbox()
        this.clickContinueBtn();
        this.verfiyOTPCode(user.otp);
        this.verifyPageAfterRegisterSuccess();
        Common.waitForPageLoading();
        return this;
    }

}

module.exports = new RegisterPage();
