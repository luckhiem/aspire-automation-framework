const PageFactory = require('../pages/PageFactory');
const TestData = require('../../resource/test_data/user_data');

let page = PageFactory;

describe('Add User Already Exist', () => {
    it('Verify cannot add account already exist', () => {
        page.Register.open().registerUser(TestData.user2)
        page.OTP.verifyPhoneOTP(TestData.user2)
        page.Register.open().registerUser(TestData.user2)
    });
});
