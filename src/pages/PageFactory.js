const Auth = require('./auth/Auth.po');
const AdminSettings = require('./admin_settings/AdminSettings.po');
const PeopleAdd = require('./admin_settings/PeopleAdd.po');
const Register = require('./auth/Register.po');
const MethodSelect = require('./incorporate_selector/SelectMethod.po');
const PersonalDetails = require('./personal_details/PersonalDetails.po');
const BusinessDetails = require('./business_details/BusinessDetails.po');

const PageFactory = function () {
    return {
        Auth: Auth,
        AdminSettings: AdminSettings,
        PeopleAdd: PeopleAdd,
        Register: Register,
        MethodSelect: MethodSelect,
        PersonalDetails: PersonalDetails,
        BusinessDetails: BusinessDetails
    }
};
module.exports = PageFactory();
