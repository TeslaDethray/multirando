/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { pickRandos } from '../utils';

import Rando from './Rando';

const Randomizer = ({ data, onClear }) => {
  const [picks, setPicks] = useState(pickRandos(data));
  const handleRandomization = () => setPicks(pickRandos(data));

  return (
    <div className='max-w-8xl px-4 md:px-8'>
      {picks.map((props) => (
        <div className='mb-4'>
          <Rando {...props} />
        </div>
      ))}
      <div className='d-flex'>
        <div className='flex-content'>
          <button className='button-secondary' onClick={handleRandomization}>
            Reselect
          </button>
        </div>
        {!!onClear && (
          <div className='flex-content'>
            <button className='button-tertiary' onClick={onClear}>
              Clear CSV Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Randomizer.defaultProps = {
  onClear: undefined,
};

Randomizer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
  onClear: PropTypes.func,
};

export default Randomizer;