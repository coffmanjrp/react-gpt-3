import { whatGPT3Feature, whatGPT3Container } from './data';
import { Feature } from '../../components';
import './whatGPT3.scss';

const WhatGPT3 = () => {
  return (
    <div id="wgpt3" className="gpt3__whatgpt3 section__margin">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={whatGPT3Feature.title} text={whatGPT3Feature.text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {whatGPT3Container.map(({ id, title, text }) => (
          <Feature key={id} title={title} text={text} />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
