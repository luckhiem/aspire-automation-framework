import PageFactory from '../pages/PageFactory';
import TestData from '../../resource/test_data/user_data';

const page = PageFactory;

describe('Add New User', () => {
    it('Verify can add new user successful', () => {
        page.Register.open().registerUser(TestData.user1);
        page.OTP.verifyPhoneOTP(TestData.user1);
        page.MethodSelect.selectMethod();
        page.PersonalDetails.addPersonalDetails(TestData.user1);
        page.OTP.verifyEmailOTP(TestData.user1);
        page.BusinessDetails.addBusinessDetails(TestData.user1.business);
        page.IdentifyDetails.addIdentify(TestData.user1);
    });
});
