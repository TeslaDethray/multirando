/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Form } from 'informed';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { HeadersCheckbox, OrientationSelect, isOrientationColumnar } from '../options';
import { parseCSV } from '../utils';

const TextareaImporter = ({ id, onSubmit }) => {
  const [input, setInput] = useState('');
  const [hasHeaders, setHasHeaders] = useState(false);
  const [isColumnar, setIsColumnar] = useState(true);

  const handleSubmit = () => {
    parseCSV({
      data: input,
      hasHeaders,
      isColumnar,
      onSubmit,
    });
  };

  return (
    <Form id={`${id}-form`}>
      <div className="input-group">
        <div className="input-group">
          <span className="input-group-text">Paste Data</span>
          <textarea
            aria-label='Paste CSV Data'
            className="form-control"
            id={id}
            name={id}
            onChange={({ target: { value } }) => setInput(value)}
            placeholder='Paste CSV Data'
          >
            {input}
          </textarea>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <div className='flex-content'>
          <div className="input-group">
            <HeadersCheckbox
              field={`${id}-has-headers`}
              onChange={({ value }) => setHasHeaders(value)}
            />
          </div>
        </div>
        <div className='flex-content'>
          <div className='input-group'>
            <OrientationSelect
              field={`${id}-data-is-columnar`}
              onChange={({ target: { value } }) => {
                setIsColumnar(isOrientationColumnar(value))
              }}
            />
          </div>
        </div>
        <div className='flex-content'>
          <div className='text-right'>
            <button
              className='button-secondary'
              id={`${id}-submit-button`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

TextareaImporter.defaultProps = {
  onSubmit: ({ data }) => console.log(data),
};

TextareaImporter.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default TextareaImporter;