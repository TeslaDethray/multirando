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

export const isOrientationColumnar = (name) => options[name].value;

const OrientationSelect = ({ id, hideLabel, ...rest}) => (
  <div className="d-flex">
    <label
      className={hideLabel && 'sr-only'}
      htmlFor={id}
    >
      Orientation
    </label>
    <select
      aria-label="Paste CSV Data"
      className="form-select"
      id={id}
      name={id}
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
  hideLabel: false,
};

OrientationSelect.propTypes = {
  id: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
};

export default OrientationSelect;
