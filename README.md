# eslint-plugin-prohibited-strings

eslint plugin to prohibit specified strings.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-prohibited-strings`:

```
$ npm install eslint-plugin-prohibited-strings --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-prohibited-strings` globally.

## Usage

Add `prohibited-strings` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["prohibited-strings"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "prohibited-strings/prohibited-strings": ["foo", "bar"]
  }
}
```

## Supported Rules

- Fill in provided rules here
