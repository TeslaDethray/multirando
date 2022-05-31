/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const options = {
  cols: {
    label: 'Columnar',
    name: 'cols',
    selected: true,
    value: true,
  },
  rows: {
    label: 'Rows',
    name: 'rows',
    selected: false,
    value: false,
  }
};

const isOrientationColumnar = (name) => options[name].value;

const OrientationSelect = ({ name, onChange, ...rest }) => (
  <div className="d-flex align-items-center">
    <label className='me-2' htmlFor={name}>
      Orientation
    </label>
    <select
      aria-label="Paste CSV Data"
      className="form-select form-select-sm"
      id={name}
      name={name}
      onChange={({ target: { value } }) => {
        onChange(isOrientationColumnar(value))
      }}
      {...rest}
    >
      {Object.values(options).map(({ label, name, selected }) => (
        <option key={name} selected={selected && 'selected'} value={name}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

OrientationSelect.defaultProps = {
  name: 'orientation-checkbox',
  onChange: () => {},
};

OrientationSelect.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default OrientationSelect;
