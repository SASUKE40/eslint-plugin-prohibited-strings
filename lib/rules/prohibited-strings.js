'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Prohibited string.',
      category: '',
      recommended: false,
    },
    fixable: null,
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },

  create: context => {
    const {options} = context;
    // const targetHtmlElements = ['input', 'li'];

    // const jsxAttributeShouldFlag = parent => {
    //   const grandparent = parent.parent;

    //   return (
    //     targetHtmlElements.indexOf(grandparent.name.name) >= 0 &&
    //     parent.name.name === 'value'
    //   );
    // };

    return {
      Literal: node => {
        if (
          // typeof node.value === 'string' &&
          // (node.parent.type !== 'JSXAttribute' ||
          //   jsxAttributeShouldFlag(node.parent)) &&
          // node.parent.type !== 'ImportDeclaration' &&
          node.value !== '' &&
          /\S/.test(node.value)
        ) {
          for (let option of options) {
            if (node.value.indexOf(option)) {
              context.report(node, `Prohibited string: '${option}'.`);
            }
          }
        }
      },
      TemplateElement: node => {
        if (node.value.raw !== '') {
          for (let option of options) {
            if (node.value.raw.indexOf(option)) {
              context.report(
                node,
                `Prohibited string in template: '${option}'.`
              );
            }
          }
        }
      },
    };
  },
};
