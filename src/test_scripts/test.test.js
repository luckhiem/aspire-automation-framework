const PageFactory = require('../pages/PageFactory');
const CONFIG = require('../config');

let page = PageFactory;

const user = {
    name: "Steve",
    email: "Steve1@gmail.com",
    phone: 33333334,
    heard_about: {
        channel: "Referral",
        detail: "CODE123456"
    },
    otp: 123456
}

describe('Adding People', () => {

    it('Adding People', () => {
        page.Register
            .open()
            .registerUser(user)
    });
});
