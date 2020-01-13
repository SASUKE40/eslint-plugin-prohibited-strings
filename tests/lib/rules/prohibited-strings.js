'use strict';

const rule = require('../../../lib/rules/prohibited-strings');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('prohibited-strings', rule, {
  valid: [
    {
      code: 'const x = 3;',
    },
    {
      code: 'const d = () => <div></div>',
    },
    {
      code: 'var foo = <div>{bar}</div>',
    },
    {
      code: 'const foo = <div className="class-name">{bar}</div>',
    },
    {
      code: 'import packageName from "a-package";',
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      code: "var foo = ''",
    },
    {
      code: 'const onlyFoo = `${onlyBar}`;',
    },
    {
      code: 'const jsxHtmlWithIdentifier = <input value={bar} />',
    },
    {
      code: '<div>\n    {foo}\n    <div>\n\t\t{bar}\n\t</div>\n</div>',
    },
  ],

  invalid: [
    {
      code: 'var myStr = "a string literal"',
      options: ['string'],
      errors: [
        {
          message: `Prohibited string: 'string'.`,
          type: 'Literal',
        },
      ],
    },
    {
      code: 'const myDiv = <div>Hello there friend!</div>;',
      options: ['friend'],
      errors: [
        {
          message: `Prohibited string: 'friend'.`,
          type: 'Literal',
        },
      ],
    },
    {
      code: 'const foo = `some literal with ${bar}`;',
      options: ['literal'],
      errors: [
        {
          message: `Prohibited string in template: 'literal'.`,
          type: 'TemplateElement',
        },
      ],
    },
    // {
    //   code: 'const jsxHtmlWithLitValue = <input value="bar" />;',
    //   options: ['bar'],
    //   errors: [
    //     {
    //       message: `Prohibited string: 'bar'.`,
    //       type: 'Literal',
    //     },
    //   ],
    // },
    // {
    //   code: 'const jsxLi = <li value="bar" />;',
    //   options: ['bar'],
    //   errors: [
    //     {
    //       message: `Prohibited string: 'bar'.`,
    //       type: 'Literal',
    //     },
    //   ],
    // },
    {
      code: '<div>\n    foo\n    <div>\n\t\t{bar}\n\t</div>\n</div>',
      options: ['foo'],
      errors: [
        {
          message: `Prohibited string: 'foo'.`,
          type: 'Literal',
        },
      ],
    },
  ],
});
