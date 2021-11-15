import { Article } from '../../components';
import articles from './imports';
import './blog.scss';

const Blog = () => {
  const newArticles = [...articles.slice(0, 0), ...articles.slice(0 + 1)];

  return (
    <div id="blog" className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={articles[0].imgUrl}
            date={articles[0].date}
            title={articles[0].title}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {newArticles.map(({ id, title, date, imgUrl }) => (
            <Article key={id} imgUrl={imgUrl} date={date} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
