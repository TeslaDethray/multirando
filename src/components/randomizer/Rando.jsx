/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const Rando = ({ item, title }) => (
  <div className='d-flex'>
    {!!title && (
      <div className='flex-content'>
        <h2 className='text-xl'>
          {title}
        </h2>
      </div>
    )}
    <div className='flex-content'>
      {item}
    </div>
  </div>
);

Rando.defaultProps = {
  title: null,
};

Rando.propTypes = {
  item: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Rando;