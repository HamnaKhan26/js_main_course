class Bank {
    /**
     * @returns {string} a unique string of any length
     */
    static createRoutingNumber() {
        //TODO
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    constructor(initialAmt = 0) {
        this.account = initialAmt;
    }

    /**
     *
     * @param {number} amt
     * @returns {promise} updates the account with the new amount and resolves with the new account amount
     */
    deposit = (amt) => {
        //TODO
        return new Promise((resolve) => {
            this.account += amt;
            resolve(this.account);
        });
    };

    /**
     *
     * @param {number} amt
     * @returns {promise} rejects if the amount requested is more than what's available and resolves with the new account amount
     */
    withdraw = (amt) => {
        //TODO
        return new Promise ((resolve, reject) => {
            if (amt > this.account) {
                reject("Insuficient funds");
            } else {
                this.account -= amt;
                resolve(this.account);
            }
        })
    };

    /**
     *
     * @returns account property
     */
    getBalance = () => {
        return this.account;
    };
}

module.exports = {
    Bank,
};
