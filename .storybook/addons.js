// https://github.com/storybooks/storybook/tree/master/addons/viewport
import '@storybook/addon-viewport/register';
// https://github.com/storybooks/storybook/tree/master/addons/notes

// https://github.com/storybooks/storybook/tree/master/addons/a11y
// import '@storybook/addon-a11y/register'

// import '@storybook/addon-knobs/register'
// https://github.com/storybooks/storybook/tree/master/addons/storysource
// import '@storybook/addon-storysource/register'
//import 'storybook-usage/register'

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
