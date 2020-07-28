const CONFIG = require('../../config.js');
const ElementHandler = require('../../common/ElementHandler');
const BrowserHandler = require('../../common/BrowserHandler.js');
const Common = require('../../common/Common.js')

const BUSINESS_DETAIL = '.new-form__view';
const SUBMIT_BTN = '.aspire-button--cta';
const BUSINESS_NAME_TXB = 'input[data-cy="register-business-name"]';
const REGISTRATION_TYPE_DRD = 'div[data-cy="register-business-registration-type"]';
const BUSINESS_ROLE_DRD = 'div[data-cy="register-business-registration-role"]';
const UEN_TXB = 'input[data-cy="register-business-registration-numer"]';
const INDUSTRY_DRD = 'div[data-cy="register-business-industry"]';
const SUB_INDUSTRY_DRD = 'div[data-cy="register-business-sub-industry"]';

class BusinessDetails {
    acccessBusinessDetailPage() {
        BrowserHandler.navigate(CONFIG.PATH.BUSINESS_DETAIL_URL);
        ElementHandler.verifyURL(CONFIG.PATH.BUSINESS_DETAIL_URL);
        ElementHandler.waitForElementDisplayed(BUSINESS_DETAIL)
        return this;
    }

    clickSubmitBtn() {
        ElementHandler.click(SUBMIT_BTN);
        return this;
    }
    
    /**
     * @param {String} name //business name of person registered
     */
    inputBusinessName(name){
        ElementHandler.addValue(BUSINESS_NAME_TXB, name);
        return this;
    }

    /**
     * @param {String} type //type of registration registered
     */
    selectRegistrationType(type){
        Common.waitForPageLoading()
        const REGISTRATION_TYPE_ITEM = `//div[@class='q-item__label'][text()="${type}"]`;
        ElementHandler.waitForElementDisplayed(REGISTRATION_TYPE_DRD)
        ElementHandler.click(REGISTRATION_TYPE_DRD);
        ElementHandler.click(REGISTRATION_TYPE_ITEM);
        return this;
    }
        
    /**
     * @param {String} UENNumber //business name of person registered
     */
    inputUENNumber(UENNumber){
        ElementHandler.addValue(UEN_TXB, UENNumber);
        return this;
    }

    /**
     * @param {String} role //type of registration registered
     */
    selectBusinessRole(role){
        Common.waitForPageLoading()
        const BUSINESS_ROLE_ITEM = `//div[@class='q-item__label'][text()="${role}"]`;
        ElementHandler.waitForElementDisplayed(BUSINESS_ROLE_DRD)
        ElementHandler.click(BUSINESS_ROLE_DRD);
        ElementHandler.waitForElementDisplayed(BUSINESS_ROLE_ITEM)
        ElementHandler.click(BUSINESS_ROLE_ITEM);
        return this;
    }

    /**
     * @param {industry} industry //industry of registration registered
     */
    selectIndustry(industry){
        Common.waitForPageLoading()
        const INDUSTRY_ITEM = `//div[@class='q-item__label'][text()="${industry.type}"]`;
        const SUB_INDUSTRY_ITEM = `//div[@class='q-item__label'][text()="${industry.sub}"]`;
        ElementHandler.waitForElementDisplayed(INDUSTRY_DRD)
        ElementHandler.click(INDUSTRY_DRD);
        ElementHandler.click(INDUSTRY_ITEM);
        ElementHandler.waitForElementDisplayed(SUB_INDUSTRY_DRD)
        ElementHandler.click(SUB_INDUSTRY_DRD);
        ElementHandler.click(SUB_INDUSTRY_ITEM);
        return this;
    }

    /**
     * @param {Business} business
     */
    addBusinessDetails(business){
        this.acccessBusinessDetailPage();
        Common.waitForPageLoading()
        this.clickSubmitBtn();
        this.inputBusinessName(business.name);
        this.selectRegistrationType(business.type);
        this.inputUENNumber(business.uen);
        this.selectBusinessRole(business.role);
        this.selectIndustry(business.industry);
        this.clickSubmitBtn();
        Common.waitForPageLoading()
        return this;
    }
}

module.exports = new BusinessDetails();
