import '@storybook/addon-viewport/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-console';

// https://github.com/storybooks/storybook/tree/master/addons/a11y
// import '@storybook/addon-a11y/register'

import * as CodeAddon from '../src/stories/addons/register';

CodeAddon.setTabs([
  {
    label: 'Readme',
    type: 'html',
  },
  {
    label: 'Scss',
    type: 'scss',
  },
  {
    label: 'Javascript',
    type: 'js',
  },
]);
