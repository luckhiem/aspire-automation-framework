class Industry {
    /**
     * @param {string} type
     * @param {string} subIndustry
     * @return {Industry}
     */
    constructor({ type, subIndustry } = {}) {
        this.type = type;
        this.sub = subIndustry;
    }
}

class Business {
    /**
     * @param {string} name
     * @param {string} type
     * @param {string} uen
     * @param {string} role
     * @return {Business}
     */
    constructor({ name,
        type,
        uen,
        role,
    } = {}) {
        this.name = name;
        this.type = type;
        this.uen = uen;
        this.role = role;
        this.industry = new Industry()
    }
}

module.exports = Business;