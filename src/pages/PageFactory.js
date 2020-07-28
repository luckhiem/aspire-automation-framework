import Register from './auth/Register.po';
import OTP from './otp/OTP.po';
import MethodSelect from './incorporate_selector/SelectMethod.po';
import PersonalDetails from './personal_details/PersonalDetails.po';
import BusinessDetails from './business_details/BusinessDetails.po';
import IdentifyDetails from './identify_details/IdentifyDetails';

const pageFactory = {
    Register,
    MethodSelect,
    PersonalDetails,
    BusinessDetails,
    IdentifyDetails,
    OTP,
};
export default pageFactory;
