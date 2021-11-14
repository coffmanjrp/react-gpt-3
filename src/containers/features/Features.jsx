import { Feature } from '../../components';
import { featuresData } from './data';
import './features.scss';

const Features = () => {
  return (
    <div id="features" className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today &amp; Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map(({ id, title, text }) => (
          <Feature key={id} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
