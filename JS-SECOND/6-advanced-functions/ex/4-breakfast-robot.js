function solution(param) {

    let myFunc = {
        upvote: () => {
            this.upvotes = this.upvotes + 1;
        },
        downvote: () => {
            this.downvotes = this.downvotes + 1;
        },
        score: () => {
            let totalVotes = this.upvotes + this.downvotes;

            let outUpvotes = this.upvotes;
            let outDownvotes = this.downvotes;
            let balance = outUpvotes - outDownvotes;

            let rating = '';
            if (totalVotes < 10) {
                rating = 'new';
            } else if (outUpvotes > totalVotes * 0.66) {
                rating = 'hot';
            } else if (balance >= 0 && (outUpvotes > 100 || outDownvotes > 100)) {
                rating = 'controversial';
            } else if (balance < 0) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }

            if (totalVotes > 50) {
                let maxNumber = Math.max(this.upvotes, this.downvotes)
                let numberInflateDown = Math.ceil(maxNumber * 0.25);
                outUpvotes += numberInflateDown;
                outDownvotes += numberInflateDown;
            }
            return [outUpvotes, outDownvotes, balance, rating]
        }

    }

    return myFunc[param]();

}

// Unexpected error: Order report should have resulted in protein=0 carbohydrate=4 fat=3 flavour=5: expected
// 'protein=0 carbohydrate=10 fat=3 flavour=5 carbohydrates=NaN' to equal
// 'protein=0 carbohydrate=4 fat=3 flavour=5'
// result = result();
//
// let expectationPairs = [
//     ['restock flavour 50', 'Success'],
//     ['prepare lemonade 4', 'Error: not enough carbohydrate in stock']
// ];
//
// for (let i = 0; i < expectationPairs.length; i++) {
//     let expectation = expectationPairs[i];
//     expect(result(expectation[0])).to.equal(expectation[1], `Order ${expectation[0]} should have resulted in ${expectation[1]}`);
// }
// Unexpected error:
//     Order prepare lemonade 4 should have resulted in
// Error: not enough carbohydrate in stock: expected
// 'Error: not enough flavour in stock' to equal
// 'Error: not enough carbohydrate in stock'
//
// Unexpected error: Order report should have resulted in protein=0 carbohydrate=4 fat=3 flavour=5:
// expected 'carbohydrate=10 flavour=5 fat=3 protein=0 carbohydrates=NaN'
// to equal 'protein=0 carbohydrate=4 fat=3 flavour=5'

let manager = solution();
//
// console.log(manager("restock flavour 50"));// Success 
// console.log(manager("prepare lemonade 4"));


// console.log(manager("restock carbohydrates 10 "));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report "));




console.log(manager('prepare turkey 1'));

console.log(manager('restock protein 10'));

console.log(manager('prepare turkey 1'));

console.log(manager('restock carbohydrate 10'));

console.log(manager('prepare turkey 1'));

console.log(manager('restock fat 10'));

console.log(manager('prepare turkey 1'));

console.log(manager('restock flavour 10'));

console.log(manager('prepare turkey 1'));

console.log(manager('report '));