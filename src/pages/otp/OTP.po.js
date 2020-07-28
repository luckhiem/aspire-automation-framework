const ElementHandler = require('../../common/ElementHandler');
const Common = require('../../common/Common.js')

const OTP_TXB = 'input[data-cy="digit-input-pin"]';
const VERIFY_OTP_BTN = 'button[data-cy="verify-otp-submit"]';
const TITLE_LOCATOR = "div.q-mb-md";
const DESCRIPTION_LOCATOR = "p.q-mb-xl";

class OTP {
    /**
     * @param {Int} otp //otp generate
     */
    verfiyOTPCode(otp) {
        Common.waitForPageLoading()
        ElementHandler.setValue(OTP_TXB, otp);
        ElementHandler.click(VERIFY_OTP_BTN);
        return this;
    }

    verifyPhoneOTPSuccess() {
        const TITLE_TEXT = "Wohoo!";
        const DESCRIPTION_TEXT = "You have successfully verified your phone number. You’re on to a great start!"
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, TITLE_TEXT);
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, DESCRIPTION_TEXT)
        return this;
    }

    verifyEmailOTPSuccess() {
        const TITLE_TEXT = "Hurray!";
        const DESCRIPTION_TEXT = "You have successfully verified your email."
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, TITLE_TEXT);
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, DESCRIPTION_TEXT)
        return this;
    }

    /**
     * @param {User} user
     */
    verifyPhoneOTP(user){
        this.verfiyOTPCode(user.otp);
        this.verifyPhoneOTPSuccess();
        return this;
    }


    /**
     * @param {User} user
     */
    verifyEmailOTP(user){
        this.verfiyOTPCode(user.otp);
        this.verifyEmailOTPSuccess();
        return this;
    }
}

module.exports = new OTP();
