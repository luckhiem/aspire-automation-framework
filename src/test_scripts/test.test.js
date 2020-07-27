const PageFactory = require('../pages/PageFactory');

let page = PageFactory;

const user = {
    name: "Steve",
    email: Math.floor(Math.random() * 88888888) + "elon1@gmail.com",
    phone: Math.floor(10000000 + Math.random() * 90000000),
    heard_about: {
        channel: "Referral",
        detail: "CODE123456"
    },
    otp: 123456,
    birthDate: "Jul 10, 1995",
    nation: 'China',
    gender: 'Female',
    purpose: 'Credit Line'
}

const business = {
    name: "APPLE",
    type: "Limited liability partnership",
    uen: Math.floor(100000000 + Math.random() * 900000000) + "M",
    role: "Company Finance/Admin",
    industry: {
        type: "Heavy Services",
        sub: "Energy"
    }
}

describe('Adding People', () => {
    it('Adding People', () => {
        page.Register.open().registerUser(user)
        page.MethodSelect.selectMethod()
        page.PersonalDetails.addPersonalDetails(user)
        page.BusinessDetails.addBusinessDetails(business)
        page.IdentifyDetails.addIdentify();
    });
});
