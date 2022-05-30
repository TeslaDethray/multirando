/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CustomCheckbox, InputGroup, SubmitButtonSecondary } from '@pantheon-systems/design-toolkit-react';
import { Form } from 'informed';
import Papa from 'papaparse';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { useState } from 'react';

import './styles.css';

const CSVImporter = ({ id, onSubmit }) => {
  const [file, setFile] = useState(undefined);

  const hasHeadersField = `${id}-has-headers`;

  const handleSubmit = (event) => {
    if (!!file) {
      Papa.parse(file, {
        header: R.pathOr(false, ['values', hasHeadersField], event),
        skipEmptyLines: true,
        complete: onSubmit,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <label className="custom-file-upload" htmlFor={id}>
          <span className="custom-file-upload-fake-button">
            Select CSV File
          </span>
          { file?.name }
          <input
            accept="text/csv"
            aria-label="Upload"
            className="form-control"
            field={id}
            id={id}
            onChange={(event) => {
              setFile(R.path(['target', 'files', 0], event));
            }}
            type="file"
          />
        </label>
        <CustomCheckbox className="custom-file-has-headers" field={hasHeadersField}>Has Headers</CustomCheckbox>
        <SubmitButtonSecondary id={`${id}-submit-button`}>
          Upload
        </SubmitButtonSecondary>
      </InputGroup>
    </Form>
  );
};

CSVImporter.defaultProps = {
  onSubmit: ({ data }) => console.log(data),
};

CSVImporter.propTypes = {
  buttonText: PropTypes.string,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  submitText: PropTypes.string,
};

export default CSVImporter;