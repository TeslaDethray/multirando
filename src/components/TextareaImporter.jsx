/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const TextareaImporter = ({ name, onChange, ...rest }) => (
  <div className="input-group">
    <label
      className="input-group-text"
      htmlFor={name}
    >
      Paste Data
    </label>
    <textarea
      aria-label='Paste CSV Data'
      className="form-control"
      id={name}
      name={name}
      onChange={({ target: { value } }) => onChange(value)}
      rows={10}
      {...rest}
    />
  </div>
);

TextareaImporter.defaultProps = {
  name: 'csv-textarea',
  onChange: () => {},
};

TextareaImporter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextareaImporter;