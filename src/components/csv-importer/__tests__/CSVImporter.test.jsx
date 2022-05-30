/** @jsx jsx */
import { jsx } from '@emotion/react';
import renderer from 'react-test-renderer';

import CSVImporter from "../CSVImporter";

describe("CSVImporter", () => {
  it.skip("renders correctly", () => {
    const tree = renderer
      .create(<CSVImporter id="whatever" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});