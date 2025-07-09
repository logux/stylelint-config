let propertyGroups = require('stylelint-config-recess-order/groups')

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-gamut', 'stylelint-order'],
  rules: {
    'declaration-property-value-disallowed-list': {},
    'keyframe-block-no-duplicate-selectors': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'gamut/color-no-out-gamut-range': true,
    'property-no-vendor-prefix': null,
    'function-disallowed-list': ['rgba', 'hsla'],
    'color-function-notation': 'modern',
    'no-irregular-whitespace': null,
    'keyframes-name-pattern': [
      '^--([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: name => `Expected keyframe name ${name} to be --kebab-case`
      }
    ],
    'order/properties-order': [propertyGroups.default, { severity: 'warning' }],
    'selector-class-pattern': null,
    'alpha-value-notation': 'number',
    'function-url-quotes': null,
    'hue-degree-notation': 'number',
    'lightness-notation': 'number',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-no-hex': true
  },
  overrides: [
    {
      files: ['**/*.sss'],
      rules: {
        'declaration-block-trailing-semicolon': null,
        'block-closing-brace-newline-before': null,
        'custom-property-empty-line-before': null,
        'block-opening-brace-space-before': null,
        'declaration-colon-newline-after': null
      }
    }
  ]
}
