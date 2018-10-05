import { articles } from "../collections";


class ArticleDBService {

    static findArticleByTitle(title) {
        return articles.find({title: title});
    }

    static findArticleByAuthor(author) {
        return articles.find({author: author});
    }

    static findArticleByTag(tag) {
        return articles.find({tags: tag});
    }

    static createArticles(article) {
        return articles.insert(article);
    }
}

export default ArticleDBService;
