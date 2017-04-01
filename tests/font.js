"use strict"

import config from "../"
import stylelint from "stylelint"
import test from "ava"

const valid = (`
.valid {
    font-weight: 700;
    font-family: "Times New Roman", serif;
}
`)

const invalid = (`
.invalid {
    font-weight: bold;
    font-family: Times New Roman, serif;
}
`)

test("valid", t => {
  return stylelint.lint({
    code: valid,
    config: config,
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
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "Errors")
    t.is(warnings.length, 2, "2 warnings")
    t.is(warnings[0].text, "Expected quotes around \"Times New Roman\" (font-family-name-quotes)")
    t.is(warnings[1].text, "Expected numeric font-weight notation (font-weight-notation)")
  })
})
