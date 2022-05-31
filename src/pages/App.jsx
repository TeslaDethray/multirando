/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment, useState } from 'react';

import { CSVImporter, Randomizer, TextareaImporter } from '../components';

import './styles.css';

const App = () => {
  const [data, setData] = useState(undefined);

  return (
    <div className="app-centerer">
      <div className='max-w-8xl px-4 md:px-8'>
        <div className="app-container">
          <h1 className='text-2xl'>
            Multi Randomizer
          </h1>
          {!!data
            ? (
              <Randomizer data={data} onClear={() => setData(undefined)} />
            ) : (
              <Fragment>
                <h2 className='mt-6 text-lg'>
                  Import Data from File
                </h2>
                <CSVImporter id='csv-import' onSubmit={setData} />
                <h3 className='mt-6 text-2xl'>
                  - OR -
                </h3>
                <h2 className='mt-6 text-lg'>
                  Paste Data
                </h2>
                <TextareaImporter id='textarea-import' onSubmit={setData} />
              </Fragment>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default App;