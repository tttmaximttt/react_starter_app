import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
  console.log(loading)
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      { " | " }
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
