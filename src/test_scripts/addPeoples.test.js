const PageFactory = require('../pages/PageFactory');
const CONFIG = require('../config');

let page = PageFactory;

describe('Adding People', () => {

  before(function () {
    page.Auth.open().doLogin(CONFIG.user.admin);
  });

  after(function () {
    page.Auth.doLogout()
  });

  it('Adding People', () => {
    page.PeopleAdd
      .acccessToAddPeoplePage()
      .addNewPeoples(CONFIG.user.normalUser)
      .verifyPageAfterPeopleAdded(CONFIG.user.normalUser)
  });

  it('Adding People unsuccessfully', () => {
    page.PeopleAdd
      .acccessToAddPeoplePage()
      .addNewPeoples(CONFIG.user.normalUser1)
      .verifyPageAfterPeopleAdded(CONFIG.user.normalUser1)
      .acccessToAddPeoplePage()
      .addNewPeoples(CONFIG.user.normalUser1)
      .verifyErrorMessageAfterPeopleAdded()
  });
});
