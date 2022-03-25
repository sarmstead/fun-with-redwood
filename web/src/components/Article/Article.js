import { Link, routes } from '@redwoodjs/router';

const Article = ({ allArticles, thisArticle }) => {
  if (allArticles) {
    return allArticles.map((article) => (
      <article key={article.id}>
        <header>
          <h2>
            <Link to={routes.article({id: article.id})}>{article.title}</Link>
          </h2>
        </header>
        <p>{article.body}</p>
        <div>Posted at: {article.createdAt}</div>
      </article>
    ))
  } else if (thisArticle) {
    return (
      <article key={thisArticle.id}>
        <header>
          <h2>
            {thisArticle.title}
          </h2>
        </header>
        <p>{thisArticle.body}</p>
        <div>Posted at: {thisArticle.createdAt}</div>
      </article>
    )
  }

}

export default Article
