/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';

import { pickRandos } from './utils';

const thWidth = css`width: 15rem;`;

const Randomizer = ({ data, onClear }) => {
  const [picks, setPicks] = useState(pickRandos(data));
  const handleRandomization = () => setPicks(pickRandos(data));

  return (
    <Fragment>
      <table class="table table-borderless table-striped">
        <tbody>
          {picks.map(({ item, title }) => (
            <tr>
              {!!title && (<th css={thWidth} scope="row">{title}</th>)}
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <button className='btn btn-primary me-3' onClick={handleRandomization}>
          Reselect
        </button>
        {!!onClear && (
          <button className='btn btn-outline-secondary' onClick={onClear}>
            Clear Data
          </button>
        )}
      </div>
    </Fragment>
  );
};

Randomizer.defaultProps = {
  onClear: () => {},
};

Randomizer.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
  onClear: PropTypes.func,
};

export default Randomizer;