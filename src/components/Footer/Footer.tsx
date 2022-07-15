import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="https://twitter.com/apyswap" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/twitter.png" alt="twitter" />
      </a>
      <a href="https://t.me/apyswapcom" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/telegram.png" alt="telegram" />
      </a>
      <a href="https://apys.medium.com/" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/medium.png" alt="medium" />
      </a>
      <a href="https://github.com/APYS-dev" target="_blank" rel="noopener noreferrer">
        <img src="/icons/social/github.png" alt="github" />
      </a>
    </footer>
  );
};

export default React.memo(Footer);
