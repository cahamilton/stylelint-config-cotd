import config from "../"
import stylelint from "stylelint"
import test from "ava"

const valid = (`
.valid {
    color: #f00;
}
`)

const invalid = (`
.invalid {
  color: #f00;
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
    t.is(warnings.length, 1, "1 warning")
    t.is(warnings[0].text, "Expected indentation of 4 spaces (indentation)")
  })
})
