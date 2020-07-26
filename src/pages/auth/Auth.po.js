const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler.js');
const BrowserHandler = require('../../common/BrowserHandler.js');

const EMAIL_TXB = '#session_email';
const PASSWORD_TXB = '#session_password';
const LOGIN_BTN = "//button[text()='Sign In']";
const INDEX_PAGE_TITLE = "TINYpulse | Engage";

class AuthPage {
    open() {
        BrowserHandler.maximizeWindow();
        BrowserHandler.navigate(CONFIG.PATH.LOGIN_URL);
        ElementHandler.verifyURL(CONFIG.PATH.LOGIN_URL);
        return this;
    }

    verifyPageAfterLogin() {
        ElementHandler.verifyURL(CONFIG.PATH.INDEX_URL);
        ElementHandler.verifyTitle(INDEX_PAGE_TITLE);
    }

    /**
     *
     * @param {User} user
     */
    doLogin(user) {
        ElementHandler.addValue(EMAIL_TXB, user.email);
        ElementHandler.addValue(PASSWORD_TXB, user.password);
        ElementHandler.click(LOGIN_BTN);
        this.verifyPageAfterLogin();
        return this;
    }

    doLogout() {
        BrowserHandler.navigate(CONFIG.PATH.LOGOUT_URL);
        ElementHandler.verifyURL(CONFIG.PATH.LOGIN_URL);
        return this;
    }
}

module.exports = new AuthPage();
