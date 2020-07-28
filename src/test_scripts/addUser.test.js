const PageFactory = require('../pages/PageFactory');
const TestData = require('../../resource/test_data/user_data');

let page = PageFactory;

describe('Add New User', () => {
    it('Verify can add new user sucessfully', () => {
        page.Register.open().registerUser(TestData.user1)
        page.OTP.verifyPhoneOTP(TestData.user1)
        page.MethodSelect.selectMethod()
        page.PersonalDetails.addPersonalDetails(TestData.user1)
        page.OTP.verifyEmailOTP(TestData.user1)
        page.BusinessDetails.addBusinessDetails(TestData.user1.business)
        page.IdentifyDetails.addIdentify(TestData.user1);
    });
});
