import React from 'react';
import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <MainInfo />
        <HowToUse />
        <Roadmap />
        <div className="deposit-btn-wrap">
          <button className="btn-bg">Deposit</button>
        </div>
      </div>
    </div>
  );
};

const MainInfo: React.FC = () => {
  return (
    <div className="content-main-info">
      <p className="title">Automated Defi yield platform</p>
      <p className="about">We are focusing to offer simplied experience to Defi users on Near</p>
      <div className="buttons">
        <button className="btn-bg">Deposit</button>
        <button className="btn-border">Details</button>
      </div>
      <div className="preview">
        <img src="/images/preview.png" />
      </div>
    </div>
  );
};

const HowToUse: React.FC = () => {
  return (
    <div className="content-how-to-use">
      <p className="title">How to use</p>
      <div className="cards">
        <img src="/cards/how-to-use/first.svg"/>
        <div className="line" />
        <img src="/cards/how-to-use/second.svg"/>
        <div className="line" />
        <img src="/cards/how-to-use/third.svg"/>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <div className="content-roadmap">
      <p className="title">Roadmap</p>
      <div className="cards">
        <div className="horizontal-cards">
          <img src="/cards/roadmap/q1.svg"/>
          <img src="/cards/roadmap/q2.svg"/>
          <div className="vertical-cards">
            <img src="/cards/roadmap/q3.svg"/>
            <img src="/cards/roadmap/q4.svg"/>
          </div>
        </div>
      </div>
      <div className="progress-about">
        <img src="/cards/roadmap/Skipped.svg"/>
        <img src="/cards/roadmap/Unscheduled.svg"/>
        <img src="/cards/roadmap/Implemented.svg"/>
      </div>
    </div>
  );
};

export default React.memo(Content);
