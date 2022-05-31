/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  ContainerFlex,
  FlexContent,
  HX as Hx
} from '@pantheon-systems/design-toolkit-react';
import PropTypes from 'prop-types';

import './styles.css';

const Rando = ({ item, title }) => (
  <ContainerFlex>
    {!!title && (
      <FlexContent>
        <Hx level={2} levelStyle={4}>
          {title}
        </Hx>
      </FlexContent>
    )}
    <FlexContent>
      {item}
    </FlexContent>
  </ContainerFlex>
);

Rando.defaultProps = {
  title: null,
};

Rando.propTypes = {
  item: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Rando;