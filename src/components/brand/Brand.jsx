import brands from './imports';
import './brand.scss';

const Brand = () => {
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
