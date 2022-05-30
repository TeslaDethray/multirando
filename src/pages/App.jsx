/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Container, HX as Hx } from '@pantheon-systems/design-toolkit-react';
import { Fragment, useState } from 'react';

import { CSVImporter, Randomizer, TextareaImporter } from '../components';

import './styles.css';

const App = () => {
  const [data, setData] = useState(undefined);

  return (
    <div className="app-centerer">
      <Container>
        <div className="app-container">
          <Hx level={1} levelStyle={2}>
            Multi Randomizer
          </Hx>
          {!!data
            ? (
              <Randomizer data={data} onClear={() => setData(undefined)} />
            ) : (
              <Fragment>
                <Hx className='mt-6' level={2} levelStyle={4}>
                  Import Data from File
                </Hx>
                <CSVImporter id='csv-import' onSubmit={setData} />
                <Hx className='mt-6 text-center' level={3} levelStyle={2}>
                  - OR -
                </Hx>
                <Hx className='mt-6' level={2} levelStyle={4}>
                  Paste Data
                </Hx>
                <TextareaImporter id='textarea-import' onSubmit={setData} />
              </Fragment>
            )
          }
        </div>
      </Container>
    </div>
  );
};

export default App;