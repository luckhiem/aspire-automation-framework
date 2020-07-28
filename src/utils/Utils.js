
const User = require('../entity/User');

class Utils {
    generateNumber() {
        return Math.floor(10000000 + Math.random() * 90000000)
    }

    generateUEN() {
        return Math.floor(100000000 + Math.random() * 900000000) + "M"
    }

    generateUsers(number, data) {
        const result = []
        for (let i = 0; i < number; i++) {
            const user = new User({});
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.email = data.lastName + data.firstName + i + '@gmail.com';
            user.manager = data.manager;
            result.push(user);
        }
        return result;
    }
};

module.exports = new Utils();

