class Bank {
    constructor(bankName,) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer({firstName, lastName, personalId}) {
        if (this._hasCustomer(personalId).length > 0) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        personalId = Number(personalId)
        let newCustomer = {firstName, lastName, personalId};
        this.allCustomers.push(newCustomer);
        return newCustomer;
    };

    depositMoney(personalId, amount) {
        this._throwErrorIfMissingPerson(personalId);
        let currCustomer = this._hasCustomer(personalId)[0];
        currCustomer['totalMoney'] ? currCustomer.totalMoney += Number(amount) : currCustomer.totalMoney = Number(amount)
        this._createTransactions(currCustomer);
        currCustomer.transactions.push(`${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);//?depostit
        return `${currCustomer.totalMoney}$`
    };

    withdrawMoney(personalId, amount) {
        this._throwErrorIfMissingPerson(personalId);
        let currCustomer = this._hasCustomer(personalId)[0];
        if (currCustomer.totalMoney < amount) {
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`)
        }
        currCustomer.totalMoney -= Number(amount);
        this._createTransactions(currCustomer);
        currCustomer.transactions.push(`${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);//?depostit
        return `${currCustomer.totalMoney}$`
    }

    customerInfo(personalId) {
        this._throwErrorIfMissingPerson(personalId);
        let currCustomer = this._hasCustomer(personalId)[0];
        let result = [`Bank name: ${this._bankName}`, `Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`, `Customer ID: ${currCustomer.personalId}`,
            `Total Money: ${currCustomer.totalMoney}$`];

        if (currCustomer.transactions.length > 0) {
            result.push(`Transactions:`);
            let transactions = currCustomer.transactions.reverse().map((t, i, arr) => `${arr.length - i}. ${t}`);
            result.push(transactions.join('\n'));
        }
        return result.join('\n');
    }

    _hasCustomer(personalId) {
        return this.allCustomers.filter(c => c.personalId === personalId);
    }

    _createTransactions(currCustomer) {
        if (!currCustomer['transactions']) {
            currCustomer.transactions = [];
        }
    }

    _throwErrorIfMissingPerson(personalId) {
        if (this._hasCustomer(personalId).length <= 0) {
            throw new Error(`We have no customer with this ID!`);
        }
    }
}

let bank = new Bank('SoftUni Bank');


console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));

console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 251);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));

/*
Unexpected error: Incorrect output: expected
'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' to equal
'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!'
*/