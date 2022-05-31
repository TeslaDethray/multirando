import { parse } from 'papaparse';
import * as R from 'ramda';

const formatData = (data, { hasHeaders = false, isColumnar = false } ) => {
  const dataCopy = isColumnar ? R.transpose(data) : data;
  if (!hasHeaders) {
    return {...dataCopy};
  }

  const keyedData = {};
  R.pipe(
    R.values,
    R.forEach(([key, ...rest]) => keyedData[key] = rest)
  )(dataCopy);
  return keyedData;
};

const parseCSV = ({ data, hasHeaders, isColumnar, onSubmit }) => {
  if (!!data) {
     parse(data, {
       complete: ({ data: completeData }) => onSubmit(formatData(completeData, { hasHeaders, isColumnar })),
       skipEmptyLines: true,
    });
  }
  return null;
};

export { parseCSV };