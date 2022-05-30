/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ContainerFlex, CustomCheckbox, FlexContent, InputGroup, SubmitButtonSecondary } from '@pantheon-systems/design-toolkit-react';
import { Form, TextArea } from 'informed';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';

import { parseCSV } from '../utils';

import './styles.css';

const TextareaImporter = ({ id, onSubmit }) => {
  const hasHeadersField = `${id}-has-headers`;

  const handleSubmit = (event) => parseCSV({
    data: pathOr('', ['values', id], event),
    hasHeaders: pathOr(false, ['values', hasHeadersField], event),
    onSubmit,
  });

  return (
    <Form id={`${id}-form`} onSubmit={handleSubmit}>
      <InputGroup>
        <label htmlFor={id}>
          Paste CSV Data
        </label>
        <TextArea
          aria-label="Paste CSV Data"
          className="textarea-importer-textarea"
          field={id}
          id={id}
          placeholder="Paste CSV Data"
        />
      </InputGroup>
      <ContainerFlex className="mt-4 textarea-importer-button-row-flex">
        <FlexContent>
          <InputGroup>
            <CustomCheckbox field={hasHeadersField}>Has Headers</CustomCheckbox>
          </InputGroup>
        </FlexContent>
        <FlexContent>
          <div className="text-right">
            <SubmitButtonSecondary id={`${id}-submit-button`}>
              Submit
            </SubmitButtonSecondary>
          </div>
        </FlexContent>
      </ContainerFlex>
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