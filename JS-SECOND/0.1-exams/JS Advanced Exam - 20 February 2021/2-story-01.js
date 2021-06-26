class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        let currUser = this._likes.filter(e => e === username);

        if (currUser.length > 0) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let currUser = this._likes.filter(e => e === username);
        if (currUser.length === 0) {
            throw new Error(`You can't dislike this story!`);
        }
        this._likes = this._likes.filter(e => e !== currUser[0]);
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        let currComment = this._comments.filter(e => e.Id === id);
        if (currComment.length === 0 || typeof id === 'undefined') {
            let formId = this._comments.length + 1;
            this._comments.push({Id: formId, Username: username, Content: content});
            return `${username} commented on ${this.title}`
        }
        if (!currComment[0]['Replies']) {
            currComment[0]['Replies'] = [];
        }

        let idFirstPart = currComment[0].Replies.length + 1;
        let idCombine = `${id}.${idFirstPart}`;
        currComment[0].Replies.push({Id: idCombine, Username: username, Content: content});
        return `You replied successfully`;
    }

    toString(sortingType) {
        let getSorted = {
            asc: (a, b) => a.Id - b.Id,
            desc: (a, b) => b.Id - a.Id,
            username: (a, b) => a.Username.localeCompare(b.Username)
        }
        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`,`Comments:`];
            this._comments.sort(getSorted[sortingType]).forEach(comment => {
                result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
                if(comment['Replies']){
                    comment.Replies.sort(getSorted[sortingType]).forEach(e => {
                        result.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`)
                    });
                }
            });

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

console.log(art.toString('username'));

console.log()

art.like("Zane");

console.log(art.toString('desc'));