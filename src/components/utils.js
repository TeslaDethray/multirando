import { parse } from 'papaparse';

const parseCSV = ({ data, hasHeaders, onSubmit }) => {
  if (!!data) {
    return parse(data, {
      header: hasHeaders,
      skipEmptyLines: true,
      complete: onSubmit,
    });
  }
  return null;
};

export { parseCSV };