import Business from './Business';

class ChannelHeard {
    /**
     * @param {string} channel
     * @param {string} referenceCode
     * @return {ChannelHeard}
     */
    constructor({ channel, referenceCode } = {}) {
        this.channel = channel;
        this.referenceCode = referenceCode;
    }
}

class User {
    /**
     * @param {string} name
     * @param {string} email
     * @param {string} phone
     * @param {string} business
     * @param {string} otp
     * @param {string} birthDate
     * @param {string} nation
     * @param {string} gender
     * @param {string} purpose
     * @param {string} NRICNumber
     * @return {User}
     */
    constructor({
        name,
        email,
        phone,
        otp,
        birthDate,
        nation,
        gender,
        purpose,
        NRICNumber,
    } = {}) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.heard_about = new ChannelHeard();
        this.otp = otp;
        this.birthDate = birthDate;
        this.nation = nation;
        this.gender = gender;
        this.purpose = purpose;
        this.NRICNumber = NRICNumber;
        this.business = new Business();
    }
}

module.exports = User;
