import propertyGroups from 'stylelint-config-recess-order/groups'

export default {
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
    'declaration-property-value-disallowed-list': [
      {
        '/^(margin|padding|inset|scroll-margin|scroll-padding|border-width|border-style|border-color)$/':
          [
            '/^(?:[^\\s()]+|\\((?:[^()]|\\([^()]*\\))*\\))+\\s+(?:[^\\s()]+|\\((?:[^()]|\\([^()]*\\))*\\))+\\s+(?:[^\\s()]+|\\((?:[^()]|\\([^()]*\\))*\\))+$/'
          ]
      },
      {
        message: 'Use 4 values instead of confusing 3-value shorthand'
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'shorthand-property-no-redundant-values': [
      true,
      {
        ignore: ['four-into-three-edge-values']
      }
    ]
  }
}
