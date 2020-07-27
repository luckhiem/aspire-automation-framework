const Register = require('./auth/Register.po');
const MethodSelect = require('./incorporate_selector/SelectMethod.po');
const PersonalDetails = require('./personal_details/PersonalDetails.po');
const BusinessDetails = require('./business_details/BusinessDetails.po');

const PageFactory = function () {
    return {
        Register: Register,
        MethodSelect: MethodSelect,
        PersonalDetails: PersonalDetails,
        BusinessDetails: BusinessDetails
    }
};
module.exports = PageFactory();
