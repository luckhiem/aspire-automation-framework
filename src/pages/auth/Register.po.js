const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');
const expect = require('chai').expect;

const PERSON_NAME_TXB = 'input[data-cy="register-person-name"]';
const EMAIL_TXB = 'input[data-cy="register-person-email"]';
const PHONE_NUMBER_TXB = 'input[data-cy="register-person-phone"]';
const HEARD_ABOUT_DRD = 'div[data-cy="register-person-heard-about"]';
const PRIVACY_CBX = 'div[data-cy="register-person-privacy"]';
const OTP_TXB = 'input[data-cy="digit-input-pin"]';
const VERIFY_OTP_BTN = 'button[data-cy="verify-otp-submit"]';
const CONTINUE_BTN = '.aspire-button--cta';

class RegisterPage {

    open() {
        BrowserHandler.maximizeWindow();
        BrowserHandler.navigate(CONFIG.PATH.REGISTER_URL);
        ElementHandler.verifyURL(CONFIG.PATH.REGISTER_URL);
        return this;
    }


    /**
     * @param {String} item //item heard about select
     */
    _selectPersonHeardAbout(item) {
        const HEARD_ABOUT_CHANNEL = `//div[@class='q-item__label'][text()="${item.channel}"]`;
        const HEARD_ABOUT_DETAIL_TXB = 'input[data-cy="register-person-heard-about-details"]';
        ElementHandler.click(HEARD_ABOUT_DRD);
        ElementHandler.click(HEARD_ABOUT_CHANNEL);
        if (item.detail !== null || item.detail !== undefined) {
            ElementHandler.addValue(HEARD_ABOUT_DETAIL_TXB, item.detail);
        }
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

    /**
     * @param {Int} otp //otp generate
     */
    _verfiyOTPCode(otp) {
        this._waitForPageLoading()
        ElementHandler.setValue(OTP_TXB, otp);
        ElementHandler.click(VERIFY_OTP_BTN);
        return this;
    }

    verifyPageAfterRegisterSuccess() {
        const TITLE_LOCATOR = "div.q-mb-md";
        const DESCRIPTION_LOCATOR = "p.q-mb-xl";
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, "Wohoo!");
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, "You have successfully verified your phone number. You’re on to a great start!")
        return this;
    }

    /**
     * @param {User} user
     */
    registerUser(user) {
        ElementHandler.addValue(PERSON_NAME_TXB, user.name);
        ElementHandler.addValue(EMAIL_TXB, user.email);
        ElementHandler.addValue(PHONE_NUMBER_TXB, user.phone);
        this._selectPersonHeardAbout(user.heard_about)
        ElementHandler.click(PRIVACY_CBX);
        ElementHandler.click(CONTINUE_BTN);
        this._verfiyOTPCode(user.otp);
        this.verifyPageAfterRegisterSuccess();
        return this;
    }

}

module.exports = new RegisterPage();
