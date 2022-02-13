import PropTypes from 'prop-types';

function Header({ text }) {
  return <div>{text}</div>;
}

Header.defaultProps = {
  text: 'Feedback UI',
};

// type checking, making sure the props you pass a component match what you expect

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;

// MAKE SURE TO UPLOAD TO A GITHUB REPO TO START PROJECT!!!
