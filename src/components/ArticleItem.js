import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <button className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </button>
    </Link>
  )
}

export default ArticleItem