/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Form } from 'informed';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { HeadersCheckbox, OrientationSelect, isOrientationColumnar } from '../options';
import { parseCSV } from '../utils';

const CSVImporter = ({ id, onSubmit }) => {
  const [file, setFile] = useState('');
  const [hasHeaders, setHasHeaders] = useState(false);
  const [isColumnar, setIsColumnar] = useState(true);

  const handleSubmit = () => parseCSV({
    data: file,
    hasHeaders,
    isColumnar,
    onSubmit,
  });

  return (
    <Form id={`${id}-form`}>
      <div className="input-group">
        <input
          aria-label="Upload"
          className="form-control"
          id={id}
          name={id}
          onChange={({ target: { files } }) => setFile(files[0])}
          type="file"
        />
      </div>
      <div className="d-flex justify-content-between">
        <HeadersCheckbox
          field={`${id}-has-headers`}
          onChange={({ value }) => setHasHeaders(value)}
        />
        <OrientationSelect
          field={`${id}-data-is-columnar`}
          hideLabel
          onChange={({ target: { value } }) => {
            setIsColumnar(isOrientationColumnar(value))
          }}
        />
        <button
          className='button-secondary'
          onClick={handleSubmit}
        >
          Upload
        </button>
      </div>
    </Form>
  );
};

CSVImporter.defaultProps = {
  onSubmit: ({ data }) => console.log(data),
};

CSVImporter.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default CSVImporter;