/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const HeadersCheckbox = ({ field, ...rest }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      name={field}
      id={field}
      type="checkbox"
      {...rest}
    />
    <label className="form-check-label" htmlFor={field}>
      Has Headers
    </label>
  </div>
);

HeadersCheckbox.propTypes = {
  field: PropTypes.string.isRequired,
};

export default HeadersCheckbox;
