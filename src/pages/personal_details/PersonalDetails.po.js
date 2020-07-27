const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');

const PERSONAL_DETAL = '.new-form__view';
const GET_START_BTN = '.aspire-button--cta';
const BIRTHDATE_SELECT = "input[placeholder='Set your date of birth']";
const NATION_DRD = "div[url='countries/all']";
const GENDER_DRD = "div[data-cy='kyc-gender']";

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

    clickGetStart() {
        this._waitForPageLoading()
        ElementHandler.click(GET_START_BTN);
        return this;
    }

    // selectBirthDay(date){
    //     ElementHandler.click(BIRTHDATE_SELECT);
    //     browser.pause(5000);
    //     ElementHandler.click(".q-date__calendar .block");
    //     return this;
    // }

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

    addPersonalDetails(user){
        this.clickGetStart();
        // this.selectBirthDay(user.birthDate);
        this.selectNationality(user.nation)
        this.selectGender(user.gender)
        browser.pause(10000)
    }
}

module.exports = new PersonalDetails();
