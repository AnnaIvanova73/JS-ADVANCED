function solution () {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        };

        toString() {
            return [`Post: ${this.title}`, `Content: ${this.content}`].join('\n');
        };
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        };

        addComment(comment) {
            this.comments.push(comment);
        };

        toString() {
            let printSuper = super.toString();
            let arr = [printSuper, `Rating: ${this.likes - this.dislikes}`]
            let comments = this.comments.map(e => ` * ${e}`).join('\n');
            this.comments.length !== 0 ? arr.push('Comments:', comments) : '';
            return arr.join('\n');
        }

    }

    class BlogPost extends Post {
        constructor(title, content,views) {
            super(title, content);
            this.views = views;
        };

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            let printSuper = super.toString();
            return [printSuper, `Views: ${this.views}`].join('\n');

        }
    }

    return{Post:Post,SocialMediaPost:SocialMediaPost,BlogPost:BlogPost}
}
const classes = solution();
console.log(classes)
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.BlogPost("TestTitle", "TestContent",1);
console.log(scm)
// scm.addComment("Good post");
//scm.addComment("Very good post");
// scm.addComment("Wow!");

console.log(scm.toString());