import '@storybook/addon-viewport/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-console';

import * as CodeAddon from '../src/stories/addons/register';

CodeAddon.setTabs([
  {
    label: 'Readme',
    type: 'html',
  },
]);
