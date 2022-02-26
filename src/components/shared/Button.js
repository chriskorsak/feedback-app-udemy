import PropTypes from 'prop-types';

const Button = ({ children, version, type, disabled }) => {
  return (
    <button disabled={disabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  version: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
