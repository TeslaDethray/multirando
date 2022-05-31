/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const CSVImporter = ({ name, onChange, ...rest }) => (
  <div className="input-group">
    <input
      aria-label="Upload"
      className="form-control"
      id={name}
      name={name}
      onChange={({ target: { files } }) => onChange(files[0])}
      type="file"
      {...rest}
    />
  </div>
);

CSVImporter.defaultProps = {
  name: 'csv-file-importer',
  onSubmit: () => {},
};

CSVImporter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default CSVImporter;