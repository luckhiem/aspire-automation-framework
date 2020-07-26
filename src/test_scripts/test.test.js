const PageFactory = require('../pages/PageFactory');
const CONFIG = require('../config');

let page = PageFactory;

const user = {
    name: "Steve",
    email: "Steve@gmail.com",
    phone: 22222222,
}

describe('Adding People', () => {

    it('Adding People', () => {
        page.Register
            .open()
            .doRegister(user)
    });
});
