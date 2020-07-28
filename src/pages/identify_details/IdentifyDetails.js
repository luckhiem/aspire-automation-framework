const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js');
const path = require('path');

const filePath = path.join(__dirname, '../../../resource/identifyCard.jpg');

const IDENTIFY_DETAIL = '.new-form__view';
const CONTINUE_BTN = "div[label='Continue'] button";
const BEGIN_BTN = "div[label='Begin Verification'] button";
const IDENTIFY_CARD_BTN = '.onfido-sdk-ui-DocumentSelector-icon-national-identity-card';
const IDENTIFY_CARD_UPLOAD = '.onfido-sdk-ui-CustomFileInput-input';
const IDENTIFY_CARD_INDEX = '.onfido-sdk-ui-Uploader-iconContainer';
const CARD_SUBMIT_BTN = '.onfido-sdk-ui-Button-button-primary';
const TAKE_SELFIE_BTN = '.onfido-sdk-ui-Camera-btn';
const NRIC_NUMBER_TXB = 'input[data-cy="identity-edit-nric"]';
const SUBMIT_BTN = ".aspire-button--cta";
const TITLE_LOCATOR = "div.q-mb-md";
const DESCRIPTION_LOCATOR = "p.q-mb-xl";

class IdentifyDetails {
    acccessIdentifyDetailPage() {
        BrowserHandler.navigate(CONFIG.PATH.IDENTIFY_DETAIL_URL);
        ElementHandler.verifyURL(CONFIG.PATH.IDENTIFY_DETAIL_URL);
        ElementHandler.waitForElementDisplayed(IDENTIFY_DETAIL);
        return this;
    }

    clickSubmitBtn() {
        ElementHandler.click(CONTINUE_BTN);
        return this;
    }

    beginVerification() {
        ElementHandler.click(BEGIN_BTN);
        return this;
    }

    verifyIdentifyCard() {
        Common.waitForPageLoading();
        ElementHandler.click(IDENTIFY_CARD_BTN);
        $(IDENTIFY_CARD_UPLOAD).addValue(filePath);
        ElementHandler.click(CARD_SUBMIT_BTN);
        ElementHandler.waitForElementDisplayed(IDENTIFY_CARD_INDEX);
        $(IDENTIFY_CARD_UPLOAD).addValue(filePath);
        ElementHandler.click(CARD_SUBMIT_BTN);
        return this;
    }

    takeSelfie() {
        ElementHandler.click(CARD_SUBMIT_BTN);
        browser.pause(5000)
        $(TAKE_SELFIE_BTN).click();
        ElementHandler.click(CARD_SUBMIT_BTN);
        Common.waitForPageLoading();
        return this;
    }

    inputNRICNumber(number) {
        ElementHandler.addValue(NRIC_NUMBER_TXB, number);
        ElementHandler.click(SUBMIT_BTN)
        return this;
    }

    verifyPageAfterAddIdentifySuccess() {
        const TITLE_TEXT = "We are on it!";
        const DESCRIPTION_TEXT = "Please sit back, relax and listen to some Beethoven while our team reviews them. We shall get back to you within 24 hours."
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR)
        ElementHandler.verifyText(TITLE_LOCATOR, TITLE_TEXT);
        ElementHandler.verifyText(DESCRIPTION_LOCATOR, DESCRIPTION_TEXT);
        return this;
    }

    /**
     * @param {User} user
     */
    addIdentify(user) {
        this.acccessIdentifyDetailPage();
        this.clickSubmitBtn();
        this.beginVerification();
        this.verifyIdentifyCard();
        this.takeSelfie();
        this.inputNRICNumber(user.NRICNumber);
        Common.waitForPageLoading();
        this.verifyPageAfterAddIdentifySuccess();
        Common.waitForPageLoading();
        return this;
    }
}

module.exports = new IdentifyDetails();
