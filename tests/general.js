"use strict"

import stylelint from "stylelint"
import stylelintConfig from "../"
import test from "ava"

const valid = (`
//
// Ipsum cillum veniam nostrud commodo exercitation. Irure veniam exercitation deserunt id do.
// Occaecat amet ex ex tempor Lorem reprehenderit non occaecat
//
.valid {
    color: #f00;
    background: #00f;
    display: inline-block;
    white-space: normal;


    font-weight: 700;

    .one {
        .two {
            .three {
                font-size: 4em;
            }
        }
    }
}

.yup {
    color: #000;
}
`)

const invalid = (`
//
// Ipsum cillum veniam nostrud commodo exercitation. Irure veniam exercitation deserunt id do. Occaecat amet ex ex tempor Lorem reprehenderit non occaecat
//
.invalid {
  color: #f00;
    background: #00f;
    _display: inline;
    *display: inline-block;
    white-space: inherit;                



    font-weight: 700;

    .one { .two { .three { .four { font-size: 5em; } } } }
}

.nope { color: #000; }

.nope {
    color: #fff;;
}
`)

test("valid", t => {
  return stylelint.lint({
    code: valid,
    config: stylelintConfig,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.falsy(errored, "No errors")
    t.is(warnings.length, 0, "No warnings")
  })
})

test("invalid", t => {
  return stylelint.lint({
    code: invalid,
    config: stylelintConfig,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "Errors")
    t.is(warnings.length, 9, "9 warnings")
    t.is(warnings[0].text, "Expected indentation of 4 spaces (indentation)")
    t.is(warnings[1].text, "Expected no more than 2 empty line(s) (max-empty-lines)")
    t.is(warnings[2].text, "Expected line length to be no more than 100 characters (max-line-length)")
    t.is(warnings[3].text, "Expected nesting depth to be no more than 3 (max-nesting-depth)")
    t.is(warnings[4].text, "Unexpected property hack \"*display\" (no-browser-hacks)")
    t.is(warnings[5].text, "Unexpected property hack \"_display\" (no-browser-hacks)")
    t.is(warnings[6].text, "Unexpected whitespace at end of line (no-eol-whitespace)")
    t.is(warnings[7].text, "Unexpected duplicate selector \".nope\" (no-duplicate-selectors)")
    t.is(warnings[8].text, "Unexpected extra semicolon (no-extra-semicolons)")
  })
})

test("invalid (no-empty-source)", t => {
  return stylelint.lint({
    code: "",
    config: stylelintConfig,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "Errors")
    t.is(warnings.length, 1, "1 warning")
    t.is(warnings[0].text, "Unexpected empty source (no-empty-source)")
  })
})
