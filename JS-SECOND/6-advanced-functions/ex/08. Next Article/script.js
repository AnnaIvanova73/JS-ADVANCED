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
