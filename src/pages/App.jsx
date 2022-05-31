/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useCallback, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import Cookies from 'universal-cookie';

import { Randomizer } from '../components';

import Retriever from './Retriever';

const App = () => {
  const dataKey = 'randomizer-data';

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const cookies = new Cookies();
  const setData = async (info) => {
    cookies.set(dataKey, info);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(100);
    forceUpdate();
  };
  const clearData = () => setData('');
  const getData = () => cookies.get(dataKey);
  const hasData = () => (!!getData() && getData() !== 'undefined');


  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Multi Randomizer</title>
      </Helmet>
      <div className='max-w-8xl px-4 md:px-8'>
        <h1 className='text-2xl'>
          Multi Randomizer
        </h1>
        {hasData()
          ? (
            <Randomizer data={getData()} onClear={clearData} />
          ) : (
            <Retriever onSubmit={setData} />
          )
        }
      </div>
    </div>
  );
};

export default hot(App);
