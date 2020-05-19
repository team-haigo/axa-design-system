import logoDefault from './images/a-logo--default.svg';
import logoOverImageBlue from './images/a-logo--overImage--blue.svg';
import logoOverImageWhite from './images/a-logo--overImage--white.svg';

import './logo.scss';

// customElements.define(
//   'axa-logo',
//   class axaLogo extends HTMLElement {
//     constructor() {
//       super();
//       let image = logoDefault;
//       console.log('axaLogo -> constructor -> image', image);

//       if (this.hasAttribute('overimage')) {
//         if (this.getAttribute('overimage') === 'blue')
//           image = logoOverImageBlue;
//         if (this.getAttribute('overimage') === 'white')
//           image = logoOverImageWhite;
//       }

//       this.insertAdjacentHTML(
//         'afterbegin',
//         `<img alt="Axa logo" src="${image}" />`
//       );
//     }
//   }
// );

class AxaLogo extends HTMLElement {
  constructor() {
    super();
    let image = logoDefault;

    if (this.hasAttribute('overimage')) {
      if (this.getAttribute('overimage') === 'blue') image = logoOverImageBlue;
      if (this.getAttribute('overimage') === 'white')
        image = logoOverImageWhite;
    }

    this.insertAdjacentHTML(
      'afterbegin',
      `<img src="${image}" alt="Axa logo" />`
    );
  }
}

customElements.define('axa-logo', AxaLogo);
