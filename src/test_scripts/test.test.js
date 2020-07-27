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
        page.IdentifyDetails.addIdentify()
        // browser.url("https://qa-test.customer-frontend.staging.aspireapp.com/sg/kyc-dashboard/identify-detail");
        // browser.pause(3000);
        // $('input[data-cy="register-person-phone"]').addValue(44444444);
        // $('.aspire-button--cta').click();
        // $('input[data-cy="digit-input-pin"]').addValue(123456);
        // $('button[data-cy="verify-otp-submit"]').click();
        // browser.pause(3000);
        // browser.url("https://qa-test.customer-frontend.staging.aspireapp.com/sg/kyc-dashboard/identify-detail");
        // browser.pause(3000);
        // $('.aspire-button--cta').click();
        // browser.pause(3000);
        // $('.aspire-button--cta').click();
        // browser.pause(3000);
        // $(".onfido-sdk-ui-DocumentSelector-icon-national-identity-card").click();
        // browser.pause(3000);
        // $(".onfido-sdk-ui-CustomFileInput-input").addValue("/Users/k001310/Documents/SD/aspire/aspire-automation-framework/resource/indentifyCard.jpg")
        // browser.pause(3000);
        // $(".onfido-sdk-ui-Button-button-primary").click();
        // browser.pause(5000);
        // $(".onfido-sdk-ui-CustomFileInput-input").addValue("/Users/k001310/Documents/SD/aspire/aspire-automation-framework/resource/indentifyCard.jpg")
        // browser.pause(3000);
        // $(".onfido-sdk-ui-Button-button-primary").click();
        // browser.pause(5000);
        // $(".onfido-sdk-ui-Button-button-primary").click();
        // browser.pause(5000);
        // $(".onfido-sdk-ui-Camera-btn").click();
        // // $(".onfido-sdk-ui-Button-button-primary").click();
        // // browser.pause(5000);
        // // browser.keys("Escape");
        // browser.pause(10000);
    });
});
