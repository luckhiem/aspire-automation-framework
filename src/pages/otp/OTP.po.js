import Common from '../../common/Common';
import ElementHandler from '../../common/ElementHandler';
import Message from '../../../resource/test_data/message.json';

const OTP_TXB = 'input[data-cy="digit-input-pin"]';
const VERIFY_OTP_BTN = 'button[data-cy="verify-otp-submit"]';
const MESSAGE_RECIPIENT_LOCATOR = '.verify-otp__message-recipient';
const TITLE_LOCATOR = 'div.q-mb-md';
const DESCRIPTION_LOCATOR = 'p.q-mb-xl';

class OTP {
    /**
     * @param {Int} otp //otp generate
     */
    verifyOTPCode(otp) {
        Common.waitForPageLoading();
        ElementHandler.setValue(OTP_TXB, otp);
        ElementHandler.click(VERIFY_OTP_BTN);
        return this;
    }

    /**
     * @param {Int} message //message recipient
     */
    verifyOTPMessageRecipient(message) {
        ElementHandler.verifyText(
            MESSAGE_RECIPIENT_LOCATOR,
            message.toLowerCase(),
        );
        return this;
    }

    verifyPhoneOTPSuccess() {
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR);
        ElementHandler.verifyText(
            TITLE_LOCATOR,
            Message.PHONE_OTP_SUCCESS_TITLE,
        );
        ElementHandler.verifyText(
            DESCRIPTION_LOCATOR,
            Message.PHONE_OTP_SUCCESS_DESCRIPTION,
        );
        return this;
    }

    verifyEmailOTPSuccess() {
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR);
        ElementHandler.verifyText(
            TITLE_LOCATOR,
            Message.EMAIL_OTP_SUCCESS_TITLE,
        );
        ElementHandler.verifyText(
            DESCRIPTION_LOCATOR,
            Message.EMAIL_OTP_SUCCESS_DESCRIPTION,
        );
        return this;
    }

    /**
     * @param {User} user
     */
    verifyPhoneOTP(user) {
        this.verifyOTPCode(user.otp);
        this.verifyPhoneOTPSuccess();
        return this;
    }

    /**
     * @param {User} user
     */
    verifyEmailOTP(user) {
        this.verifyOTPMessageRecipient(user.email);
        this.verifyOTPCode(user.otp);
        this.verifyEmailOTPSuccess();
        return this;
    }
}

export default new OTP();
