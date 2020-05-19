import { configure, addParameters } from '@storybook/html';
import { create } from '@storybook/theming';

import brandLogo from '../src/components/atoms/logo/materials/a-logo--default.svg';

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
