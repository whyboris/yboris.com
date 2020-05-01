import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.6,
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <div className="header-container">
      <Link to="/">
        <div className="site-title">
          Boris Yakubchik
        </div>
      </Link>

      <Nav />
    </div>
  </AnimatedContainer>
);

export default Header;
