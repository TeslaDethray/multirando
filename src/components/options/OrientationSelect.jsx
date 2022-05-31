/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Option, Select } from 'informed';
import PropTypes from 'prop-types';
import { ContainerFlex } from "@pantheon-systems/design-toolkit-react";

import './styles.css';

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

const OrientationSelect = ({ field, hideLabel, ...rest}) => (
  <ContainerFlex className="orientation-flex-alignment">
    <label
      className={hideLabel ? 'sr-only' : 'mr-4 orientation-flex-label text-right'}
      htmlFor={field}
    >
      Orientation
    </label>
    <Select className="orientation-flex-select" name={field} {...rest}>
      {Object.values(options).map(({ label, name, selected }) => (
        <Option key={name} selected={selected && 'selected'} value={name}>
          {label}
        </Option>
      ))}
    </Select>
  </ContainerFlex>
);

OrientationSelect.defaultProps = {
  hideLabel: false,
};

OrientationSelect.propTypes = {
  field: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
};

export default OrientationSelect;
