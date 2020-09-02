#### Overview

This project was developed using:
- `React`/`Typescript`

`eslint` was configured using the [Standard JS](https://standardjs.com/) style, for I believe it is important to have a defined coding style right at the beginning of a project.

To manage the state, I've chosen to use `Redux` + `Saga`.

I've decided to use `styled-components` and it leverages the lib's theming -- there's also a simple "dark mode" switch example at the top of the page for demonstration purposes.

It uses `i18n` for localization management -- there is an example toggle at the top of the app page, but in a real application it would possibly be implemented differently (and there's also the backend that would require to be translated accordingly).


I've done some basic testing on the components, but there's room for more...

##### Setup

In order to run this project locally, just `npm install` (or `yarn`) and `npm start`

You can run `npm run lint` to use `eslint` -- if you don't have it configured on your IDE.


