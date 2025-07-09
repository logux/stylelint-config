let propertyGroups = require('stylelint-config-recess-order/groups')

module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.sss'],
      rules: {
        'block-closing-brace-newline-before': null,
        'block-opening-brace-space-before': null,
        'custom-property-empty-line-before': null,
        'declaration-block-trailing-semicolon': null,
        'declaration-colon-newline-after': null
      }
    }
  ],
  plugins: ['stylelint-gamut', 'stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-function-notation': 'modern',
    'color-no-hex': true,
    'declaration-property-value-disallowed-list': {},
    'function-disallowed-list': ['rgba', 'hsla'],
    'function-url-quotes': null,
    'gamut/color-no-out-gamut-range': true,
    'hue-degree-notation': 'number',
    'keyframe-block-no-duplicate-selectors': true,
    'keyframes-name-pattern': [
      '^--([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: name => `Expected keyframe name ${name} to be --kebab-case`
      }
    ],
    'lightness-notation': 'number',
    'no-irregular-whitespace': null,
    'order/properties-order': [propertyGroups.default, { severity: 'warning' }],
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
}
