/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  ButtonSecondary,
  ButtonTertiary,
  ContainerFlex,
  FlexContent,
} from "@pantheon-systems/design-toolkit-react";
import PropTypes from 'prop-types';

import './styles.css';

const Randomizer = ({ data, onClear }) => {
  const handleRandomization = () => console.log(data);

  return (
    <ContainerFlex className="randomizer-button-row-flex">
      <FlexContent>
        <ButtonSecondary onClick={handleRandomization}>
          Reselect
        </ButtonSecondary>
      </FlexContent>
      {!!onClear && (
        <FlexContent>
          <div className="text-right">
            <ButtonTertiary onClick={onClear}>
              Clear CSV Data
            </ButtonTertiary>
          </div>
        </FlexContent>
      )}
    </ContainerFlex>
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