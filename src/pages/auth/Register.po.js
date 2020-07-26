const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');

const PERSON_NAME_TXB = 'input[data-cy="register-person-name"]';
const EMAIL_TXB = 'input[data-cy="register-person-email"]';
const PHONE_NUMBER_TXB = 'input[data-cy="register-person-phone"]';
const PRIVACY_CBX = 'div[data-cy="register-person-privacy"]';
const CONTINUE_BTN = '.aspire-button--cta';

class RegisterPage {

    open() {
        BrowserHandler.maximizeWindow();
        BrowserHandler.navigate(CONFIG.PATH.REGISTER_URL);
        ElementHandler.verifyURL(CONFIG.PATH.REGISTER_URL);
        return this;
    }

    /**
     * @param {User} user
     */
    doRegister(user) {
        ElementHandler.addValue(PERSON_NAME_TXB, user.name);
        ElementHandler.addValue(EMAIL_TXB, user.email);
        ElementHandler.addValue(PHONE_NUMBER_TXB, user.phone);
        ElementHandler.click(PRIVACY_CBX)
        ElementHandler.click(CONTINUE_BTN);
        return this;
    }

}

module.exports = new RegisterPage();
