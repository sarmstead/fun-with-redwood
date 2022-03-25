import { Link, routes } from '@redwoodjs/router';

const Article = ({ article }) => {
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

export default Article
