module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'declaration-property-value-disallowed-list': {},
    'declaration-block-trailing-semicolon': null,
    'block-closing-brace-newline-before': null,
    'custom-property-empty-line-before': null,
    'block-opening-brace-space-before': 'always',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'block-opening-brace-space-before': null,
    'declaration-colon-newline-after': null,
    'property-no-vendor-prefix': null,
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla'],
    'color-function-notation': 'modern',
    'selector-class-pattern': null,
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'angle',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-no-hex': true
  }
}
