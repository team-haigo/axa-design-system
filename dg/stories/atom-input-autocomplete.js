import {
	storiesOf,
	addDecorator
} from '@storybook/html'
import withCode from '../../dgAddons/colorationAddon';


import '../components/atoms/input'

const infoLong = 'Sample long text helper message, for design example that show how it can be. But we recommand, max two lines… It should be a short text helper and not a full paragraph like this.'
const infoShort = 'Text helper message.'

const styles = `
<style>
@media (min-width: 37.5rem) {
axa-input {
	margin-right: 2rem;
}
}
fieldset {
	margin-bottom: 2rem;
	padding-top: 2rem;
	border:0;
	padding:0 1rem;
	margin:0;
}
legend {
	padding-bottom: 2rem;
}
</style>
`


const values = [
	'12 street of Liverpool, London, United Kingdom',
	'12 street of Livers, East Brunsville, United Kingdom',
	'12 street of Livells, London, United Kingdom'
]

const demo1 = `
<fieldset><legend class=a-typo__text-title>Autocomplete demo</legend>

<axa-input +label="Autocomplete">
	<input list=xxx placeholder="For this demo, type Live" />
	<datalist id=xxx>
		<option value="${values.join('"><option value="')}">
	</datalist>
</axa-input>

</fieldset>

`
storiesOf(`Atoms|Inputs`)
	.addDecorator(withCode(demo1, 'html'))
	.add('Autocomplete', () => demo1 + styles)