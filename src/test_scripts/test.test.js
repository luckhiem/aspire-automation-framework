const PageFactory = require('../pages/PageFactory');
const CONFIG = require('../config');

let page = PageFactory;

const user = {
    name: "Steve",
    email: "elon1@gmail.com",
    phone: 33333464,
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
