import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="https://twitter.com/apyswap" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/twitter.svg" alt="twitter" />
      </a>
      <a href="https://t.me/apyswapcom" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/telegram.svg" alt="telegram" />
      </a>
      <a href="https://apys.medium.com/" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/medium.svg" alt="medium" />
      </a>
      <a href="https://docs.apys.io" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/doc.svg" alt="doc" />
      </a>
      <a href="https://github.com/APYS-dev" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/github.svg" alt="github" />
      </a>
    </footer>
  );
};

export default React.memo(Footer);
