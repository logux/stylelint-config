module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'declaration-block-trailing-semicolon': null,
    'block-closing-brace-newline-before': null,
    'custom-property-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'block-opening-brace-space-before': null,
    'declaration-colon-newline-after': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin']
      }
    ],
    'color-named': 'never'
  }
}
