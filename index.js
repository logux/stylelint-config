module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  rules: {
    'declaration-block-trailing-semicolon': null,
    'block-closing-brace-newline-before': null,
    'block-opening-brace-space-before': null,
    "declaration-colon-newline-after": null,
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global"]
    }],
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'define-mixin',
        'mixin'
      ]
    }],
    'color-named': 'never'
  }
}
