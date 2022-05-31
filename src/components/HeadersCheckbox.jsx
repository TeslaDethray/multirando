/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const HeadersCheckbox = ({ name, onChange, ...rest }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      name={name}
      id={name}
      onChange={({ target: { checked } }) => onChange(checked)}
      type="checkbox"
      {...rest}
    />
    <label className="form-check-label" htmlFor={name}>
      Has Headers
    </label>
  </div>
);

HeadersCheckbox.defaultProps = {
  name: 'has-headers-checkbox',
  onChange: () => {},
};

HeadersCheckbox.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default HeadersCheckbox;
