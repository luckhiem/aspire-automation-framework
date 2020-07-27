const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js');
const path = require('path');

const filePath = path.join(__dirname, '../../../resource/identifyCard.jpg');

const IDENTIFY_DETAIL = '.new-form__view';
const SUBMIT_BTN = "div[label='Continue'] button";
const BEGIN_BTN = "div[label='Begin Verification'] button";
const IDENTIFY_CARD_BTN = '.onfido-sdk-ui-DocumentSelector-icon-national-identity-card';
const IDENTIFY_CARD_UPLOAD = '.onfido-sdk-ui-CustomFileInput-input';
const CARD_SUBMIT_BTN = '.onfido-sdk-ui-Button-button-primary';
const TAKE_SELFIE_BTN = '.onfido-sdk-ui-Camera-btn';

class IdentifyDetails {
    acccessIdentifyDetailPage() {
        BrowserHandler.navigate(CONFIG.PATH.IDENTIFY_DETAIL_URL);
        ElementHandler.verifyURL(CONFIG.PATH.IDENTIFY_DETAIL_URL);
        ElementHandler.waitForElementDisplayed(IDENTIFY_DETAIL);
        return this;
    }

    clickSubmitBtn() {
        ElementHandler.waitForElementDisplayed(SUBMIT_BTN)
        ElementHandler.click(SUBMIT_BTN);
        return this;
    }

    beginVerification() {
        ElementHandler.waitForElementDisplayed(SUBMIT_BTN)
        ElementHandler.click(BEGIN_BTN);
        return this;
    }

    verifyIdentifyCard(url) {
        Common.waitForPageLoading();
        ElementHandler.click(IDENTIFY_CARD_BTN);
        $(IDENTIFY_CARD_UPLOAD).addValue(filePath);
        ElementHandler.click(CARD_SUBMIT_BTN);
        ElementHandler.waitForElementDisplayed(".onfido-sdk-ui-Uploader-iconContainer");
        $(IDENTIFY_CARD_UPLOAD).addValue(filePath);
        ElementHandler.click(CARD_SUBMIT_BTN);
        return this;
    }

    takeSelfie() {
        ElementHandler.click(CARD_SUBMIT_BTN);
        browser.pause(10000)
        $(TAKE_SELFIE_BTN).click();
        ElementHandler.click(CARD_SUBMIT_BTN);
        return this;
    }

    /**
     * @param {Business} business
     */
    addIdentify() {
        this.acccessIdentifyDetailPage();
        this.clickSubmitBtn();
        this.beginVerification();
        this.verifyIdentifyCard();
        this.takeSelfie();
        browser.pause(10000)
        return this;
    }
}

module.exports = new IdentifyDetails();
