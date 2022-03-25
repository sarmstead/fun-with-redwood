import { Link, routes } from '@redwoodjs/router';

const Article = ({ article }) => {
  return (
  <article>
    <header>
      <h2>
        {article.title}
      </h2>
    </header>
    <p>{article.body}</p>
    <div>Posted at: {article.createdAt}</div>
  </article>
)
}

export default Article
