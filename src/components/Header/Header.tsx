import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img className="logo" src="/images/logo.svg" alt="Apys" />

        <a className="btn-bg" href="https://apys.io" target="_blank" rel="noreferrer">
          Launch app
        </a>
      </div>
    </header>
  );
};

export default React.memo(Header);
