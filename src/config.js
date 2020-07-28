const ENV = require('./environment.json');

const config = function () {
    return {
        PATH: {
            BASE_URL: `https://${ENV.domain}/`,
            REGISTER_URL: `https://${ENV.domain}/sg/register`,
            LOGIN_URL: `https://${ENV.domain}/signin`,
            SELECT_METHOD_URL: `https://${ENV.domain}/sg/incorporate-selector`,
            PERSONAL_DETAIL_URL: `https://${ENV.domain}/sg/kyc-dashboard/person-detail`,
            BUSINESS_DETAIL_URL: `https://${ENV.domain}/sg/kyc-dashboard/business-detail`,
            IDENTIFY_DETAIL_URL: `https://${ENV.domain}/sg/kyc-dashboard/identify-detail`,
        },
    };
};

module.exports = config();