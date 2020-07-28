const Register = require('./auth/Register.po');
const OTP = require("./otp/OTP.po");
const MethodSelect = require('./incorporate_selector/SelectMethod.po');
const PersonalDetails = require('./personal_details/PersonalDetails.po');
const BusinessDetails = require('./business_details/BusinessDetails.po');
const IdentifyDetails = require('./identify_details/IdentifyDetails');

const PageFactory = function () {
    return {
        Register: Register,
        MethodSelect: MethodSelect,
        PersonalDetails: PersonalDetails,
        BusinessDetails: BusinessDetails,
        IdentifyDetails: IdentifyDetails,
        OTP: OTP
    }
};
module.exports = PageFactory();
