/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  ButtonSecondary,
  ButtonTertiary,
  Container,
  ContainerFlex,
  FlexContent,
} from '@pantheon-systems/design-toolkit-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { pickRandos } from '../utils';

import Rando from './Rando';
import './styles.css';

const Randomizer = ({ data, onClear }) => {
  const [picks, setPicks] = useState(pickRandos(data));
  const handleRandomization = () => setPicks(pickRandos(data));

  return (
    <Container>
      {picks.map((props) => (
        <div className='mb-4'>
          <Rando {...props} />
        </div>
      ))}
      <ContainerFlex className='randomizer-button-row-flex'>
        <FlexContent>
          <ButtonSecondary onClick={handleRandomization}>
            Reselect
          </ButtonSecondary>
        </FlexContent>
        {!!onClear && (
          <FlexContent>
            <div className='text-right'>
              <ButtonTertiary onClick={onClear}>
                Clear CSV Data
              </ButtonTertiary>
            </div>
          </FlexContent>
        )}
      </ContainerFlex>
    </Container>
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