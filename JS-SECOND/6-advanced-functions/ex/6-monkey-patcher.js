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
            let positivePercent = outUpvotes / balance;
            if(positivePercent === Infinity) {
                positivePercent = 0
            }

            let rating = '';

            let checkBalance = Math.sign(balance);

            if (totalVotes < 10) {
                rating = 'new'
            }

            if (positivePercent * 100 > 66) {
                rating = 'hot'

            }
            if (positivePercent <= 66 && (outUpvotes > 100 || outDownvotes > 100)) {
                rating = 'controversial'

            }

            if (checkBalance < 0) {
                rating = 'unpopular'

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

var forumPost = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};

var answer = solution.call(forumPost, 'score');
console.log(solution.call(forumPost, 'score'))
var expected = [150, 60, 90, 'hot'];

// expect(forumPost.upvotes).to.equal(120, 'Actual upvotes where manipulated');
// expect(forumPost.downvotes).to.equal(30, 'Actual downvotes where manipulated');
//
// compareScore(expected, answer);

// function compareScore(expected, answer) {
//     expect(expected[0]).to.equal(answer[0], 'Incorrect number of upvotes');
//     expect(expected[1]).to.equal(answer[1], 'Incorrect number of downvotes');
//     expect(expected[2]).to.equal(answer[2], 'Incorrect score');
//     expect(expected[3]).to.equal(answer[3], 'Incorrect rating');
// }

/*
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
            let positivePercent = outUpvotes / balance;
            if(positivePercent === Infinity) {
                positivePercent = 0
            }

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
 */