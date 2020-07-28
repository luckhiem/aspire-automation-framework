
class Utils {
    generateNumber() {
        return Math.floor(10000000 + Math.random() * 90000000)
    }

    generateUEN() {
        return Math.floor(100000000 + Math.random() * 900000000) + "M"
    }
};

module.exports = new Utils();

