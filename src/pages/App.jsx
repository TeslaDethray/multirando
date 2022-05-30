/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Container, HX as Hx } from '@pantheon-systems/design-toolkit-react';

import { CSVImporter, TextareaImporter } from '../components';

import './styles.css';

const App = () => {
  return (
    <div className="app-centerer">
      <Container>
        <div className="app-container">
          <Hx level={1} levelStyle={2}>
            Multi Randomizer
          </Hx>
          <Hx className='mt-6' level={2} levelStyle={4}>
            Import Data from File
          </Hx>
          <CSVImporter id='csv-import' />
          <Hx className='mt-6 text-center' level={3} levelStyle={2}>
            - OR -
          </Hx>
          <Hx className='mt-6' level={2} levelStyle={4}>
            Paste Data
          </Hx>
          <TextareaImporter id='textarea-import' />
        </div>
      </Container>
    </div>
  );
};

export default App;