const Auth = require('./auth/Auth.po');
const AdminSettings = require('./admin_settings/AdminSettings.po');
const PeopleAdd = require('./admin_settings/PeopleAdd.po');
const Register = require('./auth/Register.po');


const PageFactory = function () {
    return {
        Auth: Auth,
        AdminSettings: AdminSettings,
        PeopleAdd: PeopleAdd,
        Register: Register
    }
};
module.exports = PageFactory();
