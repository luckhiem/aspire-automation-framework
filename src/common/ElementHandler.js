const expect = require('chai').expect;

const TIMEOUT = 30000;

class ElementHandler {
    /**
    * @param {string} locator    Element for wait
    */
    waitForElement(locator) {
        $(locator).waitForExist({ timeout: TIMEOUT, reverse: false });
        return this;
    }

    /**
    * @param {string} locator    Element for wait
    */
    waitForElementDisplayed(locator) {
        $(locator).waitForDisplayed({ timeout: TIMEOUT, reverse: false });
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    waitForElementClickable(locator) {
        $(locator).waitForClickable({ timeout: TIMEOUT });
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does not exist").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does exist").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisplayed(locator) {
        expect($(locator).isDisplayed(), "Element " + locator + " is not displayed").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotDisplayed(locator) {
        expect($(locator).isDisplayed(), "Element " + locator + " is displayed").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementEnabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not enabled").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not disabled").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} text       Text for verify
    */
    verifyText(locator, text) {
        expect($(locator).getText()).to.equal(text);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    getText(locator) {
        return $(locator).getText();
    }

    /**
    * @param {string} locator    Element for verify
    */
    getValue(locator) {
        return $(locator).getValue();
    }

    /**
    * @param {string} locator    Element for verify
    */
    getAttribute(locator, attribute) {
        return $(locator).getAttribute(attribute);
    }


    /**
    * @param {string} title    Element for verify
    */
    verifyTitle(title) {
        browser.waitUntil(() => {
            return browser.getTitle() === title;
        }, 30000, `${title} is not correct`);
        return this;
    }

    /**
    * @param {string} url    URL for verify
    */
    verifyURL(url) {
        browser.waitUntil(() => {
            return browser.getUrl() === url;
        }, TIMEOUT, `${url} is not correct`);
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    setValue(locator, value) {
        this.waitForElement(locator);
        $(locator).setValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    addValue(locator, value) {
        this.waitForElement(locator);
        $(locator).addValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    click(locator) {
        this.waitForElementClickable(locator);
        $(locator).click();
        return this;
    }
}


module.exports = new ElementHandler();