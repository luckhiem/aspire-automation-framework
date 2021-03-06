import { name, internet, company } from 'faker';
import User from '../../src/entity/User';
import Utils from '../../src/utils/Utils';

const user1 = new User();
user1.name = name.findName();
user1.email = internet.exampleEmail();
user1.phone = Utils.generateNumber();
user1.otp = 123456;
user1.heard_about.channel = 'Referral';
user1.heard_about.referenceCode = 'CODE123456';
user1.birthDate = 'July/10/1995';
user1.nation = 'Afghanistan';
user1.gender = 'Female';
user1.purpose = 'Credit Line';
user1.NRICNumber = Utils.generateNumber();
user1.business.name = company.companyName();
user1.business.type = 'Limited liability partnership';
user1.business.uen = Utils.generateUEN();
user1.business.role = 'Company Finance/Admin';
user1.business.industry.type = 'Heavy Services';
user1.business.industry.sub = 'Energy';

const user2 = new User();
user2.name = name.findName();
user2.email = internet.exampleEmail();
user2.phone = Utils.generateNumber();
user2.otp = 123456;
user2.heard_about.channel = 'Referral';
user2.heard_about.referenceCode = 'CODE123456';
user2.birthDate = 'July/10/1995';
user2.nation = 'Afghanistan';
user2.gender = 'Female';
user2.purpose = 'Credit Line';
user2.NRICNumber = Utils.generateNumber();
user2.business.name = company.companyName();
user2.business.type = 'Limited liability partnership';
user2.business.uen = Utils.generateUEN();
user2.business.role = 'Company Finance/Admin';
user2.business.industry.type = 'Heavy Services';
user2.business.industry.sub = 'Energy';

export default {
    user1,
    user2,
};
