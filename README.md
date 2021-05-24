# sfcookies

Built to give ReactJS, AngularJS, or any nativeJS Web Application access to browser cookies.
[Visit on NPM](https://www.npmjs.com/package/sfcookies)

## Installation

1) Run `npm install --save sfcookies`

2) Import these methods in es6 like so:

```js
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
```

## Usage

### `bake_cookie(name, value, date)`

Bake Cookie allows you to pass a name and a string value to store a cookie on the user's browser. It maps the name to the string.

### `read_cookie(name)`

Returns the value of your baked cookie.

### `delete_cookie(name)`

Removes the cookie from your browser history.
