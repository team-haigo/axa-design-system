import { storiesOf } from '@storybook/html';
import withCode from '../../../stories/addons/coloration';

import './input';

import styles from './styles';

const demo1 = `
<fieldset>
  <legend class=a-typo__text-title>Password fields</legend>

  <axa-input +label="Default Password Field">
    <input type="password" />
  </axa-input>

  <axa-input +label="Disabled Password Field">
    <input type="password" disabled />
  </axa-input>

  <axa-input +label="Password Field with Placeholder and Text Helper">
    <input type="password" placeholder="Placeholder password filled" />
    <p slot=info>A good password contains at least <strong>8 characters</strong>, including at least <strong>two numbers</strong> and two <strong>punctuation marks</strong>. Spaces matter, so why not write an easy-to-remember sentence?</p>
  </axa-input>

  <axa-input +label="Password Field hidden value (default)">
    <input type="password" value="should see me only when requested" />
  </axa-input>

  <axa-input +label="Password Field Revealed Value" +revealed>
    <input type="password" value="should see me" />
    <p slot=info><strong>Note to implementor</strong> : you should always let the user decide if (s)he wants to reveal his password or not, please never use <code>+revealed</code> by default.</p>
  </axa-input>
</fieldset>
`;

storiesOf(`Atoms/Inputs`, module)
  .addDecorator(withCode(demo1, 'html'))
  .add('Password', () => demo1 + styles);
