import PageFactory from '../pages/PageFactory';
import TestData from '../../resource/test_data/user_data';

const page = PageFactory;

describe('Add User Already Exist', () => {
    it('Verify cannot add account already exist', () => {
        page.Register.open().registerUser(TestData.user2);
        page.OTP.verifyPhoneOTP(TestData.user2);
        page.Register.open().registerUser(TestData.user2);
    });
});
