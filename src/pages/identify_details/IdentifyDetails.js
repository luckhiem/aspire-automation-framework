import path from 'path';
import Common from '../../common/Common';
import CONFIG from '../../config';
import ElementHandler from '../../common/ElementHandler';
import BrowserHandler from '../../common/BrowserHandler';
import Message from '../../../resource/test_data/message.json';

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
const SUBMIT_BTN = '.aspire-button--cta';
const TITLE_LOCATOR = 'div.q-mb-md';
const DESCRIPTION_LOCATOR = 'p.q-mb-xl';

class IdentifyDetails {
    accessIdentifyDetailPage() {
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
        browser.pause(5000);
        $(TAKE_SELFIE_BTN).click();
        ElementHandler.click(CARD_SUBMIT_BTN);
        Common.waitForPageLoading();
        return this;
    }

    /**
     * @param {String} number //NRIC Number of user using this site
     */
    inputNRICNumber(number) {
        ElementHandler.addValue(NRIC_NUMBER_TXB, number);
        ElementHandler.click(SUBMIT_BTN);
        return this;
    }

    verifyPageAfterAddIdentifySuccess() {
        ElementHandler.waitForElementDisplayed(TITLE_LOCATOR);
        ElementHandler.verifyText(
            TITLE_LOCATOR,
            Message.IDENTIFY_SUCCESS_TITLE,
        );
        ElementHandler.verifyText(
            DESCRIPTION_LOCATOR,
            Message.IDENTIFY_SUCCESS_DESCRIPTION,
        );
        return this;
    }

    /**
     * @param {User} user
     */
    addIdentify(user) {
        this.accessIdentifyDetailPage();
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

export default new IdentifyDetails();
