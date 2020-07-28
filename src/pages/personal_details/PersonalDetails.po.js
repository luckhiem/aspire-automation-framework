const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js')

const PERSONAL_DETAIL = '.new-form__view';
const SUBMIT_BTN = '.aspire-button--cta';
const BIRTHDAY_SELECT = "input[placeholder='Set your date of birth']";
const NATION_DRD = "div[url='countries/all']";
const GENDER_DRD = "div[data-cy='kyc-gender']";
const PURPOSE_DRD = "div[data-cy='person-edit-purpose']";

class PersonalDetails {
    accessPersonalDetailPage() {
        BrowserHandler.navigate(CONFIG.PATH.PERSONAL_DETAIL_URL);
        ElementHandler.verifyURL(CONFIG.PATH.PERSONAL_DETAIL_URL);
        ElementHandler.waitForElementDisplayed(PERSONAL_DETAIL)
        return this;
    }

    clickSubmitBtn() {
        Common.waitForPageLoading()
        ElementHandler.click(SUBMIT_BTN);
        return this;
    }

    selectBirthDay(){
        Common.waitForPageLoading();
        const DATE_SELECT = "//div[contains(@class, 'q-date__calendar-item')]//span[text() = 20]";
        ElementHandler.click(BIRTHDAY_SELECT);
        ElementHandler.click(DATE_SELECT);
        return this;
    }

    /**
     * @param {String} nation //nation of user using this site
     */
    selectNationality(nation){
        Common.waitForPageLoading()
        const NATION_ITEM = `//div[@class='q-item__label'][text()="${nation}"]`;
        ElementHandler.click(NATION_DRD);
        ElementHandler.click(NATION_ITEM);
        return this;
    }

    /**
     * @param {String} gender //gender of user using this site
     */
    selectGender(gender){
        const GENDER_ITEM = `//div[@class='q-item__label'][text()="${gender}"]`;
        ElementHandler.click(GENDER_DRD);
        ElementHandler.click(GENDER_ITEM);
        return this;
    }

    
    /**
     * @param {String} purpose //purpose of user using this site
     */
    selectPurpose(purpose){
        const GENDER_ITEM = `//div[@class='q-item__label'][text()="${purpose}"]`;
        ElementHandler.click(PURPOSE_DRD);
        ElementHandler.click(GENDER_ITEM);
        return this;
    }

    /**
     * @param {User} user
     */
    addPersonalDetails(user){
        this.accessPersonalDetailPage()
        this.clickSubmitBtn();
        this.selectBirthDay();
        this.selectNationality(user.nation);
        this.selectGender(user.gender);
        this.selectPurpose(user.purpose);
        this.clickSubmitBtn();
        Common.waitForPageLoading()
        return this;
    }
}

module.exports = new PersonalDetails();
