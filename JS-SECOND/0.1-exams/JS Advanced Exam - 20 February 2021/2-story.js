class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has ${this._likes.length} likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length -1} others like this story!`;
    };

    like(username) {
        let currUser = this._likes.filter(e => e === username);
        if (currUser.length > 0) {
            throw new Error(`You can't like the same story twice!`)
        }
        if (username === this.creator) { //?
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username) {
        let currUser = this._likes.filter(e => e === username);
        if (currUser.length === 0) {
            throw new Error(`You can't dislike this story!`)
        }

        this._likes = this._likes.filter(e => e !== username);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let currComment = this._comments.filter(e => e.id === id);

        if (currComment.length === 0 || typeof id === 'undefined') {
            let currentId = this._comments.length + 1;
            this._comments.push({id: currentId, username: username, content: content})
            return `${username} commented on ${this.title}`
        }
        if (!currComment[0]['replies']) {
            currComment[0].replies = [];
        }

        let replyCounter = currComment[0].replies.length + 1
        let replyId = currComment[0].id + '.' + replyCounter;
        currComment[0].replies.push({id: replyId, username: username, content: content});
        return "You replied successfully";
    }

    toString(type) {
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:'];
        let sorting = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        }
        this._comments.sort(sorting[type]).forEach(e => {
            result.push(`-- ${e.id}. ${e.username}: ${e.content}`);
            if (e['replies']) {
                e.replies.sort(sorting[type]).forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
            }
        })
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");

art.like("John");

console.log(art.likes);

art.dislike("John");

console.log(art.likes);

art.comment("Sammy", "Some Content");

console.log(art.comment("Ammy", "New Content"));

art.comment("Zane", "Reply", 1);

art.comment("Jessy", "Nice :)");

console.log(art.comment("SAmmy", "Reply@", 1));

console.log()

console.log(art.toString('asc'));

console.log()

art.like("Zane");

console.log(art.toString('desc'));


// class Story {
//     constructor(title, creator) {
//         this.title = title;
//         this.creator = creator;
//         this._comments = [];
//         this._likes = [];
//     }
//
//     get likes() {
//         if (this._likes.length === 0) {
//             return `${this.title} has ${this._likes.length} likes`
//         }
//         if (this._likes.length === 1) {
//             return `${this._likes[0]} likes this story!`
//         }
//
//         return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
//     };
//
//     like(username) {
//         let currUser = this._likes.filter(user => user === username);
//         if (currUser.length > 0) {
//             throw new Error ("You can't like the same story twice!");
//         }
//         if (this.creator === username) {
//             throw new Error ("You can't like your own story!");
//         }
//         this._likes.push(username);
//         return `${username} liked ${this.title}!`
//     };
//
//     dislike(username) {
//         let currUser = this._likes.filter(user => user === username);
//         if (currUser.length === 0) {
//             throw new Error ("You can't dislike this story!")
//         }
//         this._likes = this._likes.filter(user => user !== username);
//         return `${username} disliked ${this.title}`
//     };
//
//     comment(username, content, id) {
//         let currComment = this._comments.filter(comment => comment.id === id);
//         if ( currComment.length === 0 || typeof id === 'undefined') {
//             let currId = this._comments.length + 1;
//             this._comments.push({id:currId, username, content});
//             return `${username} commented on ${this.title}`
//         }
//         currComment = this._comments.filter(comment => comment.id === id)[0];
//         if (!currComment['replies']) {
//             currComment.replies = [];
//         }
//         let calcId = currComment.replies.length + 1;
//         let replyId = `${currComment.id}.${calcId}`
//         currComment.replies.push({id: replyId, username, content})
//         return `You replied successfully`
//     };
//
//     toString(type) {
//         let doSorting = {
//             asc: (a, b) => a.id - b.id,
//             desc: (a, b) => b.id - a.id,
//             username: (a, b) => a.username.localeCompare(b.username)
//         }
//         let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`,`Comments:` ]
//         this._comments.sort(doSorting[type]).forEach(e => {
//             result.push(`-- ${e.id}. ${e.username}: ${e.content}`);
//             if (e.replies) {
//                 let rep = e.replies.sort(doSorting[type]).forEach(e => result.push(`--- ${e.id}. ${e.username}: ${e.content}`));
//             }
//         })
//
//         return result.join('\n');
//     }
// }


/*
class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has ${this._likes.length} likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length -1} others like this story!`;
    };

    like(username) {
        let currUser = this._likes.filter(e => e === username);
        if (currUser.length > 0) {
            throw new Error(`You can't like the same story twice!`)
        }
        if (username === this.creator) { //?
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    };

    dislike(username) {
        let currUser = this._likes.filter(e => e === username);
        if (currUser.length === 0) {
            throw new Error(`You can't dislike this story!`)
        }

        this._likes = this._likes.filter(e => e !== username);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let currComment = this._comments.filter(e => e.id === id);

        if (currComment.length === 0 || typeof id === 'undefined') {
            let currentId = this._comments.length + 1;
            this._comments.push({id: currentId, username: username, content: content})
            return `${username} commented on ${this.title}`
        }
        if (!currComment[0]['replies']) {
            currComment[0].replies = [];
        }

        let replyCounter = currComment[0].replies.length + 1
        let replyId = currComment[0].id + '.' + replyCounter;
        currComment[0].replies.push({id: replyId, username: username, content: content});
        return "You replied successfully";
    }

    toString(type) {
       // console.log(this._comments)
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, 'Comments:'];
        let sorting = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        }
        this._comments.sort(sorting[type]).forEach(e => {
            result.push(`-- ${e.id}. ${e.username}: ${e.content}`);
            if (e['replies']) {
                e.replies.sort(sorting[type]).forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
            }
        })
        return result.join('\n');
    }
}
 */


//
// let art = new Story("My Story", "Anny");
// assert.equal(art.like("John"),"John liked My Story!");
// assert.equal(art.likes,"John likes this story!");
// assert.equal(art.dislike("John"), "John disliked My Story");
// assert.equal(art.likes, "My Story has 0 likes");
// assert.equal(art.comment("Sammy", "Some Content"), "Sammy commented on My Story");
// assert.equal(art.comment("Ammy", "New Content"), "Ammy commented on My Story");
// assert.equal(art.comment("Zane", "Reply", 1), "You replied successfully");
// assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
// assert.equal(art.comment("SAmmy", "Reply@", 1), "You replied successfully");
//
// assert.equal(art.toString('username'),`Title: My Story
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply`);
//
// assert.equal(art.like("Zane"), "Zane liked My Story!");
// assert.equal(art.toString('desc'),`Title: My Story
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply`);
