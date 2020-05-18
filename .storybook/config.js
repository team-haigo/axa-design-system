import { configure, addParameters } from '@storybook/html';
import { create } from '@storybook/theming';

import brandLogo from '../src/components/atoms/logo/materials/a-logo--default.svg';

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Axa Brand Design System',
      brandUrl: 'https://design.axa.com/',
      brandImage: brandLogo,
      panelPosition: 'bottom',
      showPanel: true,
    }),
  },
});

configure(function loadStories() {
  const req = require.context('../src/stories', true, /\.js$/);
  req.keys().forEach((filename) => req(filename));
}, module);
