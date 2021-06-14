let user = {
    name : 'crystal',
    age:30,
    email: 'crystal@thenetninja.co.uk',
    location:'barlin',
    blogs:['why mac and cheese rules','10 thing to make with marmite'],
    login: function(){
        console.log('the user logged in')
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs (){//objects are not defined without this
        console.log('this user has writte the following blogs:')
        this.blogs.forEach(blog => console.log(blog))
    }
};

user.logBlogs();
/* 1-examples
console.log(user.name);
console.log(user['name']);
let currKey = 'email'
console.log(user[currKey]);
user.login();

console.log(user['something'])

if(!user['something']){
    user['something'] = 2;
}
console.log(typeof user['somethingElse'] === 'undefined');
if(typeof user['somethingElse'] === 'undefined'){
    user['somethingElse'] =1;
}
console.log(user);
user.login();
user.logout();
*/