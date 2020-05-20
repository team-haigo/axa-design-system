# Axa design system • ![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg) [![Netlify Status](https://api.netlify.com/api/v1/badges/cefa44b9-8174-4149-9948-4d084048339b/deploy-status)](https://app.netlify.com/sites/axa-design-system/deploys)

> UI Framework for building ambitious products on the web.

✨ New demo : https://axa-design-system.netlify.app/

🧟‍♂️ Legacy demo : https://jpv-axa.github.io/book/

## Getting started

```console
git clone git@github.com:jpv-axa/book.git
npm install
npm start
```

Now go to `http://localhost:58044` in your browser.

---

🔥 this

## Include in your project

### Using the compiled version

The simplest way is to use the files in the `dist/` directory, of type `{.js|.css|.svg}`.

They are compiled to work at least on IE11, and all desktop and mobile browser versions released after IE11 (2013).

Check `dist/demo.html` for a working demo.

### Using the original sources

If you are a bundler user, like Webpack or Rollup, you can directly use the source files in the `./src/components/` directory. Sources are written in Sass and ES Next. Check `package.json` and `.babelrc` to know the babel and sass versions and plugins you will need.

### /!\ Fonts special case

We are using two fonts and their licence disallow us to distribute it to you. To be specific : the file `./src/components/settings/fonts.scss` and its built counterpart `dist/fonts.X.X.X.css` contain the font files but are here only to show a realistic demo. Licensing disallows you to use them directly.

You are supposed to copy or buy and host yourself the font files.
You can download the original _Source Sans Pro Regular_ and _Source Sans Pro SemiBold_ here : https://fonts.google.com/selection?selection.family=Source+Sans+Pro:400,600. For performance reasons, please select a language and convert the files to Woff2 (for performance) and Woff (for compatibility).
The License for _Publico Headline Bold_ DISALLOWS us to distribute to other Axa entities the original file. Please buy a licence from Commercial Type (https://commercialtype.com/catalog/publico/publico_headline/bold), with the Woff2 option (for performance) and Woff (for compatibility).
