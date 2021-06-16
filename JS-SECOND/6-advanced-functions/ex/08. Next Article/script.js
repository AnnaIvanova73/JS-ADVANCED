function getArticleGenerator(articles) {
    return () => {
        let article = document.createElement('article');
        if(articles.length > 0) {
            article.textContent = articles.shift();
            let divContent = document.getElementById('content')
            divContent.appendChild(article);
        }
    }

}

/*
function getArticleGenerator(articles) {
    let container = document.querySelector('#content');
    return function () {
        if (articles.length > 0) {
            let createArticle = document.createElement('article');
            let text = articles.shift();
            createArticle.textContent = text;
            container.appendChild(createArticle);
        }
    }
}
 */
/*
function getArticleGenerator(articles) {
    return () => articles.length
        ? document.getElementById('content').innerHTML += `<article>${articles.splice(0, 1)}</article>` : null
}
 */
