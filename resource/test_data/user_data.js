const User = require("../../src/entity/User");
const Utils = require("../../src/utils/Utils");
const Faker = require('faker');

const user1 = new User()
user1.name = Faker.name.findName();
user1.email = Faker.internet.email();
user1.phone = Utils.generateNumber();
user1.otp = 123456;
user1.heard_about.channel = "Referral";
user1.heard_about.referenceCode = "CODE123456";
user1.birthDate = "July/10/1995";
user1.nation = "Afghanistan";
user1.gender = "Female";
user1.purpose= 'Credit Line',
user1.NRICNumber = Utils.generateNumber()
user1.business.name = Faker.company.companyName();
user1.business.type = "Limited liability partnership";
user1.business.uen = Utils.generateUEN();
user1.business.role = "Company Finance/Admin";
user1.business.industry.type = "Heavy Services";
user1.business.industry.sub = "Energy"

module.exports = {
    user1: user1
}