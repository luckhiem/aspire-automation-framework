const PageFactory = require('../pages/PageFactory');
const TestData = require('../../resource/test_data/user_data');

let page = PageFactory;

describe('Adding People', () => {
    it('Adding People', () => {
        page.Register.open().registerUser(TestData.user1)
        page.MethodSelect.selectMethod()
        page.PersonalDetails.addPersonalDetails(TestData.user1)
        page.BusinessDetails.addBusinessDetails(TestData.user1.business)
        page.IdentifyDetails.addIdentify(TestData.user1);
    });
});
