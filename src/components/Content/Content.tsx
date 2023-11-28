import React from 'react';
import './Content.scss';

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <MainInfo />
        <HowToUse />
        <Roadmap />
        {/* <Staking />*/}
      </div>
    </div>
  );
};

const MainInfo: React.FC = () => {
  return (
    <div className="content-main-info">
      <p className="title">DeFi Yield Optimizer</p>
      <p className="about">APYS offers simplified yield farming experience on NEAR Protocol</p>
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
    </div>
  );
};

const Staking: React.FC = () => {
  return (
    <div className="content-staking">
      <p className="title">Foundation Staking</p>
      <div className="description">
        Stake APYS tokens to claim your share in Allbridge
      </div>

      <div className="tokens">

        <img src="/icons/tokens/apys.svg" />
        <div className="arrow" >
          <img src="/images/arrow.svg" />
        </div>
        <img src="/icons/tokens/abr.svg" />
      </div>

      <div className="stake-details">
        <a className="btn-bg" href="https://stake.apyswap.com/" target="_blank" rel="noreferrer">
          Stake
        </a>

        <a className="btn-border" href="https://docs.apyswap.com/apys-staking" target="_blank" rel="noreferrer">
          Details
        </a>
      </div>

    </div>
  );
};

export default React.memo(Content);
