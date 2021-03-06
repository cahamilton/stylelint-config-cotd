module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "extends": [
    "stylelint-config-property-sort-order-smacss",
  ],
  "rules": {
    // Color //
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,

    // Font Family //
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,

    // Font Weight //
    "font-weight-notation": "numeric",

    // Function //
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",

    // Number //
    "number-leading-zero": "always",
    "number-max-precision": 3,
    "number-no-trailing-zeros": true,

    // String //
    "string-no-newline": true,
    "string-quotes": "double",

    // Length //
    "length-zero-no-unit": true,

    // Time //
    "time-min-milliseconds": 250,

    // Unit //
    "unit-blacklist": [ "cm", "in", "mm", "pc", "pt" ],
    "unit-case": "lower",
    "unit-no-unknown": true,

    // Value //
    "value-keyword-case": "lower",
    "value-no-vendor-prefix": true,

    // Value list //
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    // Shorthand property //
    "shorthand-property-no-redundant-values": true,

    // Property //
    "property-case" : "lower",
    "property-no-unknown" : true,
    "property-no-vendor-prefix" : true,

    // Keyframe declaration //
    "keyframe-declaration-no-important": true,

    // Declaration //
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": [ "never", {
      except: ["after-comment"],
    } ],
    "declaration-no-important": true,

    // Declaration block //
    "declaration-block-no-duplicate-properties": [ true, {
      ignore: ["consecutive-duplicates-with-different-values"],
    } ],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",

    // Block //
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": [ "always", {
      ignoreAtRules: [ "if", "else" ],
    } ],
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",

    // Selector //
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-compound-selectors": 3,
    "selector-max-attribute": 0,
    "selector-max-id": 0,
    "selector-no-qualifying-type": true,
    "selector-max-type": 0,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,

    // Selector list //
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",

    // Rule //
    "rule-empty-line-before": [ "always", {
      except: ["after-single-line-comment"],
    } ],

    // Media feature //
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    // Media query list //
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    // At-rule //
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",

    // Comment //
    "comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    } ],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": [ "SHAME", "Shame", "shame" ],

    // General / Sheet //
    "indentation": 4,
    "max-empty-lines": 2,
    "max-line-length": [ 100, {
      severity: "warning",
    } ],
    "max-nesting-depth": 3,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,

    // scss - @-else //
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-empty-line-before": "never",

    // scss - @-extend //
    "scss/at-extend-no-missing-placeholder": true,

    // scss - @-function //
    "scss/at-function-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

    // scss - @-if //
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",

    // scss - @-import //
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": [ "scss", "sass", "css" ],

    // scss - @-mixin //
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

    // scss - $-variable //
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-before": [ "always", {
      except: [ "first-nested", "after-comment", "after-dollar-variable" ],
      ignore: ["after-comment"],
    } ],
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

    // scss - %-placeholder //
    "scss/percent-placeholder-pattern": "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$",

    // scss - //-comment //
    "scss/double-slash-comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["between-comments"],
    } ],
    "scss/double-slash-comment-whitespace-inside": "always",

    // scss - Declaration //
    "scss/declaration-nested-properties": "never",
    "scss/declaration-nested-properties-no-divided-groups": true,

    // scss - Media feature //
    "scss/media-feature-value-dollar-variable": "always",

    // scss - Operator //
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,

    // scss - Selector //
    "scss/selector-no-redundant-nesting-selector": true,

  },
}
