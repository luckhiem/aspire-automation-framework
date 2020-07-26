class User {
    /**
     * @param {string} email
     * @param {string} password
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} manager
     * @return {User}
     */
    constructor({ email,
        password,
        firstName,
        lastName,
        manager,
    } = {}) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.manager = manager;
    }
}

module.exports = User;