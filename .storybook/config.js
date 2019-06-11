import {
    configure,
    addParameters
} from '@storybook/html'
import theme from './theme'
// https://www.npmjs.com/package/@pickra/copy-code-block
// import copyCodeBlock from '@pickra/copy-code-block'

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
    options: {
        theme,
        panelPosition: 'bottom',
        showPanel: false
    },
    /*viewport: {
        defaultViewport: 'iphone6'
    },*/

})
configure(function loadStories() {
    const req = require.context('../dg/stories', true, /\.js$/);
    req.keys().forEach(filename => req(filename));
}, module)