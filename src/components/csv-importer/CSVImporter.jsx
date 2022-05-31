/** @jsx jsx */
import { jsx } from '@emotion/react';
import {ContainerFlex, CustomCheckbox, InputGroup, SubmitButtonSecondary} from '@pantheon-systems/design-toolkit-react';
import { Form } from 'informed';
import PropTypes from 'prop-types';
import { pathOr, pipe } from 'ramda';
import { useState } from 'react';

import { HeadersCheckbox, OrientationSelect, isOrientationColumnar } from '../options';
import { parseCSV } from '../utils';

import './styles.css';

const CSVImporter = ({ id, onSubmit }) => {
  const [file, setFile] = useState('');

  const hasHeadersField = `${id}-has-headers`;
  const isColumnarField = `${id}-data-is-columnar`;

  const handleSubmit = (event) => parseCSV({
    data: file,
    hasHeaders: pathOr(false, ['values', hasHeadersField], event),
    isColumnar: pipe(
      pathOr('cols', ['values', isColumnarField]),
      isOrientationColumnar
    )(event),
    onSubmit,
  });

  return (
    <Form  id={`${id}-form`} onSubmit={handleSubmit}>
      <InputGroup>
        <label className='custom-file-upload' htmlFor={id}>
          <span className='custom-file-upload-fake-button'>
            Select CSV File
          </span>
          { file?.name }
          <input
            accept='text/csv'
            aria-label='Upload'
            className='form-control'
            field={id}
            id={id}
            onChange={(event) => {
              setFile(pathOr('', ['target', 'files', 0], event));
            }}
            type='file'
          />
        </label>
        <ContainerFlex className="custom-file-options">
          <HeadersCheckbox className='custom-file-has-headers' field={hasHeadersField} />
          <OrientationSelect field={isColumnarField} hideLabel />
        </ContainerFlex>
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
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default CSVImporter;