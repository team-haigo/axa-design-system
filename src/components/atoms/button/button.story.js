import { storiesOf } from '@storybook/html';
import { withConsole } from '@storybook/addon-console';

import './button';

let code = `
  <axa-button>
    Primary button
  </axa-button>

  <axa-button class=a-button--secondary>
    Secondary Blue
  </axa-button>

  <axa-button disabled>
    Disabled Primary button
  </axa-button>

  <axa-button class=a-button--secondary disabled>
    Disabled Secondary Blue
  </axa-button>

  <div style="background:#333333; padding:1em">
    <axa-button class="a-button--secondary--white">
      Secondary White
    </axa-button>

    <axa-button class="a-button--secondary--white" disabled>
      Disabled Secondary White
    </axa-button>
  </div>
`;

storiesOf(`Atoms/Buttons`, module).add('All variations', () => code);
