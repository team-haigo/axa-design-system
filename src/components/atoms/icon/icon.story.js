import { storiesOf } from '@storybook/html';

import './icon';

const allSizes = `
  <axa-icon />

  <axa-icon> </axa-icon>
`;

const allNames = `
  <axa-icon icon="search"> </axa-icon>
  <axa-icon icon="close"> </axa-icon>
  <axa-icon icon="menu"> </axa-icon>
  <axa-icon icon="facebook"> </axa-icon>
  <axa-icon icon="facebook"> </axa-icon>
  <axa-icon icon="linkedin"> </axa-icon>
  <axa-icon icon="instagram"> </axa-icon>
  <axa-icon icon="twitter"> </axa-icon>
  <axa-icon icon="youtube"> </axa-icon>
  <axa-icon icon="eye"> </axa-icon>
  <axa-icon icon="house"> </axa-icon>
  <axa-icon icon="more_horiz"> </axa-icon>
  <axa-icon icon="more_vert"> </axa-icon>
  <axa-icon icon="credit_card"> </axa-icon>
  <axa-icon icon="car"> </axa-icon>
  <axa-icon icon="flight"> </axa-icon>
  <axa-icon icon="health"> </axa-icon>
`;

storiesOf(`Atoms/Icons`, module)
  .add('Sizes', () => allSizes)
  .add('Names', () => allNames);
