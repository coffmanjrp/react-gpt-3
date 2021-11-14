import { atlassian, dropbox, google, shopify, slack } from './imports';
import './brand.scss';

const Brand = () => {
  const brands = [
    {
      id: 1,
      src: google,
      alt: 'Google',
    },
    {
      id: 2,
      src: slack,
      alt: 'Slack',
    },
    {
      id: 3,
      src: atlassian,
      alt: 'Atlassian',
    },
    {
      id: 4,
      src: dropbox,
      alt: 'Dropbox',
    },
    {
      id: 5,
      src: shopify,
      alt: 'Shopify',
    },
  ];

  return (
    <div className="gpt3__brand section__padding">
      {brands.map(({ id, src, alt }) => (
        <div key={id}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </div>
  );
};

export default Brand;
