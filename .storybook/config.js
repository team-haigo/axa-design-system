import { addDecorator, addParameters } from '@storybook/html';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

import brandLogo from '../src/components/atoms/logo/images/a-logo--default.svg';

addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Axa Brand Design System',
      brandUrl: 'https://design.axa.com/',
      brandImage: brandLogo,
    }),
  },
});

addDecorator(withA11y);
