const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');

const PERSON_NAME_TXB = 'input[data-cy="register-person-name"]';
const EMAIL_TXB = 'input[data-cy="register-person-email"]';
const PHONE_NUMBER_TXB = 'input[data-cy="register-person-phone"]';
const HEARD_ABOUT_DRD = 'div[data-cy="register-person-heard-about"]';
const PRIVACY_CBX = 'div[data-cy="register-person-privacy"]';
const OTP_TXB = 'input[data-cy="digit-input-pin"]';
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
    _selectPersonHeardAbout(item){
        const HEARD_ABOUT_CHANNEL = `//div[@class='q-item__label'][text()="${item.channel}"]`;
        const HEARD_ABOUT_DETAIL_TXB = 'input[data-cy="register-person-heard-about-details"]';
        ElementHandler.click(HEARD_ABOUT_DRD);
        ElementHandler.click(HEARD_ABOUT_CHANNEL);
        if(item.detail !== null || item.detail !== undefined){
            ElementHandler.addValue(HEARD_ABOUT_DETAIL_TXB, item.detail);
        }
        return this;
    }

    // _verfiyOTPCode(){

    // }

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
        browser.pause(5000);
        ElementHandler.addValue(OTP_TXB, user.otp);
        browser.pause(5000);
        return this;
    }

}

module.exports = new RegisterPage();
