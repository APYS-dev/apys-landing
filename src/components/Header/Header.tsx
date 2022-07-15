import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img className="logo" src="/images/logo.svg" alt="Apys" />

        <button className="btn-bg">Launch app</button>
      </div>
    </header>
  );
};

export default React.memo(Header);
