const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');

const PERSONAL_DETAL = '.new-form__view';
const SUBMIT_BTN = '.aspire-button--cta';
const BIRTHDATE_SELECT = "input[placeholder='Set your date of birth']";
const NATION_DRD = "div[url='countries/all']";
const GENDER_DRD = "div[data-cy='kyc-gender']";
const PURPOSE_DRD = "div[data-cy='person-edit-purpose']";
const OTP_TXB = 'input[data-cy="digit-input-pin"]';
const VERIFY_OTP_BTN = 'button[data-cy="verify-otp-submit"]';

class PersonalDetails {
    acccessMethodSelectPage() {
        BrowserHandler.navigate(CONFIG.PATH.PERSONAL_DETAIL_URL);
        ElementHandler.verifyURL(CONFIG.PATH.PERSONAL_DETAIL_URL);
        ElementHandler.waitForElementDisplayed(PERSONAL_DETAL)
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

    clickSubmitBtn() {
        this._waitForPageLoading()
        ElementHandler.click(SUBMIT_BTN);
        return this;
    }

    selectBirthDay(date){
        const DATE_SELECT = "//div[contains(@class, 'q-date__calendar-item')]//span[text() = 20]"
        ElementHandler.click(BIRTHDATE_SELECT);
        ElementHandler.click(DATE_SELECT);
        return this;
    }

    selectNationality(nation){
        this._waitForPageLoading()
        const NATION_ITEM = `//div[@class='q-item__label'][text()="${nation}"]`;
        ElementHandler.waitForElementDisplayed(NATION_DRD)
        ElementHandler.click(NATION_DRD);
        ElementHandler.click(NATION_ITEM);
        return this;
    }

    selectGender(gender){
        const GENDER_ITEM = `//div[@class='q-item__label'][text()="${gender}"]`;
        ElementHandler.click(GENDER_DRD);
        ElementHandler.click(GENDER_ITEM);
        return this;
    }

    selectPurpose(purpose){
        const GENDER_ITEM = `//div[@class='q-item__label'][text()="${purpose}"]`;
        ElementHandler.click(PURPOSE_DRD);
        ElementHandler.click(GENDER_ITEM);
        return this;
    }

    /**
     * @param {Int} otp //otp generate
     */
    verfiyOTPCode(otp) {
        this._waitForPageLoading()
        ElementHandler.setValue(OTP_TXB, otp);
        ElementHandler.click(VERIFY_OTP_BTN);
        return this;
    }

    verifyPageAfterAddPersonalDetailSuccess() {
        const TITLE_LOCATOR = "div.q-mb-md";
        const DESCRIPTION_LOCATOR = "p.q-mb-xl";
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, "Hurray!");
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, "You have successfully verified your email.")
        return this;
    }

    addPersonalDetails(user){
        this.clickSubmitBtn();
        this.selectBirthDay();
        this.selectNationality(user.nation);
        this.selectGender(user.gender);
        this.selectPurpose(user.purpose);
        this.clickSubmitBtn();
        this.verfiyOTPCode(user.otp);
        this.verifyPageAfterAddPersonalDetailSuccess();
        return this;
    }
}

module.exports = new PersonalDetails();
