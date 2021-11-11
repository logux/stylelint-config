module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'declaration-property-value-disallowed-list': {},
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'property-no-vendor-prefix': null,
    'color-function-notation': 'modern',
    'selector-class-pattern': null,
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-no-hex': true
  }
}
