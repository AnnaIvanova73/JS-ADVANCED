class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    };

    newCustomer({firstName, lastName, personalId}) {
        let currCustomer = this.allCustomers.filter(e => e.personalId === personalId);
        if (currCustomer.length > 0) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomers.push({firstName, lastName, personalId});
        return {firstName, lastName, personalId};
    };

    depositMoney(personalId, amount) {
        let currCustomer = this.allCustomers.filter(e => e.personalId === personalId);
        if (currCustomer.length === 0) {
            throw new Error(`We have no customer with this ID!`);
        }
        currCustomer = currCustomer[0]
        if (!currCustomer['totalMoney']) {
            currCustomer.totalMoney = 0;
            currCustomer.transactionInfo = [];
        }

        currCustomer.totalMoney += amount;
        currCustomer.transactionInfo.push(`${currCustomer.firstName} ${currCustomer.lastName} made deposit of ${amount}$!`);
        return `${currCustomer.totalMoney}$`;
    };

    withdrawMoney(personalId, amount) {
        let currCustomer = this.allCustomers.filter(e => e.personalId === personalId);
        if (currCustomer.length === 0) {
            throw new Error('We have no customer with this ID!');
        }
        currCustomer = currCustomer[0]
        if (currCustomer.totalMoney < amount) {
            throw new Error(`${currCustomer.firstName} ${currCustomer.lastName} does not have enough money to withdraw that amount!`)
        }

        currCustomer.totalMoney -= amount;
        currCustomer.transactionInfo.push(`${currCustomer.firstName} ${currCustomer.lastName} withdrew ${amount}$!`);
        return `${currCustomer.totalMoney}$`;
    };

    customerInfo(personalId) {
        let currCustomer = this.allCustomers.filter(e => e.personalId === personalId);
        if (currCustomer.length === 0) {
            throw new Error('We have no customer with this ID!');
        }
        currCustomer = currCustomer[0]
        let result = []
        if (currCustomer.transactionInfo.length > 0) {
            result.push(`Transactions:`);
           currCustomer.transactionInfo.reverse().map((e, i) =>  result.push(`${currCustomer.transactionInfo.length - i}. ${e}`));
        }
        result.unshift(`Bank name: ${this._bankName}`, `Customer name: ${currCustomer.firstName} ${currCustomer.lastName}`,
            `Customer ID: ${currCustomer.personalId}`, `Total Money: ${currCustomer.totalMoney}$`)
        return result.join('\n');
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

// Unexpected error: Incorrect output: expected
// 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:' +
// '\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' to equal
// 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$ \nTransactions:' +
// '\n3. Svetlin Nakov made deposit of 250$!,2. Svetlin Nakov made deposit of 250$!,1. Svetlin Nakov withdrew 125$!'






