import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img className="logo" src="/images/logo.svg" alt="Apys" />

        <div className="main-buttons">
          <a className="btn-border btn-docs" href="https://docs.apys.io" target="_blank" rel="noreferrer">
            Docs
          </a>

          <a className="btn-bg" href="https://app.apys.io" target="_blank" rel="noreferrer">
            Launch app
          </a>
        </div>

      </div>
    </header>
  );
};

export default React.memo(Header);
