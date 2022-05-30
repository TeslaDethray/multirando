import { parse } from 'papaparse';

const parseCSV = ({ data, hasHeaders, onSubmit }) => {
  if (!!data) {
     parse(data, {
      header: hasHeaders,
      skipEmptyLines: true,
      complete: ({ data }) => onSubmit(data),
    });
  }
  return null;
};

export { parseCSV };