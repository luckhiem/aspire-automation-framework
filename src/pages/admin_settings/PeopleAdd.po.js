const AdminSettings = require('../admin_settings/AdminSettings.po')
const ElementHandler = require('../../common/ElementHandler');
const expect = require('chai').expect;

const FIRST_NAME_TXB = 'input[field=firstName]';
const LAST_NAME_TXB = 'input[field=lastName]'
const EMAIL_TXB = 'input[field=email]';
const ADD_PEOPLE_BTN = '.cucumber-send-invite-button';
const PAGE_INDEX = '#content-container';
const MANAGER_DDL = '.new-custom-select';
const SEARCH_MANAGER_TXB = 'input[placeholder="Search..."]';
const ADD_MORE_BTN = '.js-cucumber-add-more';
const SUCCESS_STATUS_LBL = ".items-center.green";
const ERROR_STATUS_LBL = ".items-center.red";
const OVERVIEW_LBL = ".overflow-auto div";

class PeopleAdd {
    acccessToAddPeoplePage() {
        AdminSettings.openPage();
        ElementHandler.click("a[href='/invite']");
        ElementHandler.waitForElementDisplayed(PAGE_INDEX);
        return this;
    }

    /**
    * @param {string} firstName
    * @param {string} lastName
    */
    _inputPeopleName(index, firstName, lastName) {
        ElementHandler.addValue(`tr:nth-child(${index}) ` + FIRST_NAME_TXB, firstName);
        ElementHandler.addValue(`tr:nth-child(${index}) ` + LAST_NAME_TXB, lastName);
        return this;
    }

    /**
     * @param {string} email
     */
    _inputPeopleEmail(index, email) {
        ElementHandler.addValue(`tr:nth-child(${index}) ` + EMAIL_TXB, email);
        return this;
    }

    /**
     * @param {string} manager //manager displayed name
     */
    _selectManager(index, manager) {
        const MANAGER_ITEM_VALUE = `//h4[text()='${manager}']//ancestor::div//div[@class='select-email-item']/parent::div`
        ElementHandler.click(`tr:nth-child(${index}) ` + MANAGER_DDL);
        ElementHandler.addValue(SEARCH_MANAGER_TXB, manager);
        ElementHandler.waitForElementDisplayed(MANAGER_ITEM_VALUE);
        ElementHandler.verifyElementDisplayed(MANAGER_ITEM_VALUE)
        ElementHandler.click(MANAGER_ITEM_VALUE);
        return this;
    }


    saveAddPeople() {
        ElementHandler.click(ADD_PEOPLE_BTN);
        return this;
    }

    /**
     * @param {User} user
     */
    addNewPeoples(user) {
        for (let i = 0; i < user.length; i++) {
            const index = i + 1;
            if (index % 4 === 0) {
                ElementHandler.click(ADD_MORE_BTN);
            }
            this._inputPeopleName(index, user[i].firstName, user[i].lastName);
            this._inputPeopleEmail(index, user[i].email);
            this._selectManager(index, user[i].manager)
        }
        this.saveAddPeople()
        return this
    }


    getPeopleInfoAfterPeopleAdded() {
        const peopleInfo = []
        const PEOPLE_ROW_TBL = "//tbody//tr";
        const rowNumbers = $$(PEOPLE_ROW_TBL);
        for (let i = 0; i < rowNumbers.length; i++) {
            const index = i + 1;
            const FIRST_NAME_CELL_VALUE = `//tbody//tr[${index}]//td[count(//th[text()='First Name']/preceding-sibling::th)+1]`;
            const LAST_NAME_CELL_VALUE = `//tbody//tr[${index}]//td[count(//th[text()='Last Name']/preceding-sibling::th)+1]`;
            const EMAIL_CELL_VALUE = `//tbody//tr[${index}]//td[count(//th[text()='Email']/preceding-sibling::th)+1]`;
            const MANAGER_CELL_VALUE = `//tbody//tr[${index}]//td[count(//th[text()='Manager']/preceding-sibling::th)+1]`;
            const firstName = ElementHandler.getText(FIRST_NAME_CELL_VALUE);
            const lastName = ElementHandler.getText(LAST_NAME_CELL_VALUE);
            const email = ElementHandler.getText(EMAIL_CELL_VALUE);
            const manager = ElementHandler.getText(MANAGER_CELL_VALUE);

            const info = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                manager: manager
            }

            peopleInfo.push(info);
        }
        return peopleInfo
    }

    /**
    * @param {User} user
    */
    verifyPeopleInfoAfterPeopleAdded(user) {
        let overviewValue;
        if (user.length === 1) {
            overviewValue = `${user.length} employee has been added to TINYpulse`
        } else {
            overviewValue = `${user.length} employees have been added to TINYpulse`
        }
        ElementHandler.verifyText(OVERVIEW_LBL, overviewValue);
        const peopleInfo = this.getPeopleInfoAfterPeopleAdded();
        expect(JSON.stringify(user)).to.include(JSON.stringify(peopleInfo));
        return this
    }

    /**
    * @param {User} user
    */
    verifyPageAfterPeopleAdded(user) {
        const STATUS_VALUE = "check_circle\nCongratulations";
        ElementHandler.verifyText(SUCCESS_STATUS_LBL, STATUS_VALUE);
        this.verifyPeopleInfoAfterPeopleAdded(user);
        this.getPeopleInfoAfterPeopleAdded()
        return this
    }

    verifyErrorMessageAfterPeopleAdded() {
        const ERROR_MESSAGE = "error\nUh oh! Unable to add user because email already exists";
        ElementHandler.verifyText(ERROR_STATUS_LBL, ERROR_MESSAGE);
        return this
    }
}

module.exports = new PeopleAdd();
