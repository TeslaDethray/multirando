/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  CSVImporter,
  HeadersCheckbox,
  OrientationSelect,
  TextareaImporter,
} from '../components';
import { parseCSV } from '../components/utils';

const Retriever = ({ onSubmit }) => {
  const [file, setFile] = useState('');
  const [input, setInput] = useState('');
  const [hasHeaders, setHasHeaders] = useState(false);
  const [isColumnar, setIsColumnar] = useState(true);

  const handleSubmit = () => (
    parseCSV({
      data: !!input ? input : file,
      hasHeaders,
      isColumnar,
      onSubmit,
    })
  );

  return (
    <form>
      <CSVImporter
        disabled={!!input}
        id='csv-import'
        onChange={setFile}
      />
      <h3 className='m-3 text-2xl text-center'>
        - OR -
      </h3>
      <TextareaImporter
        disabled={!!file}
        id='textarea-import'
        onChange={setInput}
      />
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <HeadersCheckbox
          field='has-headers'
          onChange={setHasHeaders}
        />
        <OrientationSelect
          field='data-is-columnar'
          hideLabel
          onChange={setIsColumnar}
        />
        <div className='button-group'>
          <button
            className='btn btn-outline-secondary me-3'
            onClick={() => {setFile(''); setInput('');}}
            type='reset'
          >
            Reset
          </button>
          <button
            className='btn btn-primary'
            disabled={!file && !input}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

Retriever.defaultProps = {
  onSubmit: () => {},
};

Retriever.propTypes = {
  onSubmit: PropTypes.func,
};

export default Retriever;
