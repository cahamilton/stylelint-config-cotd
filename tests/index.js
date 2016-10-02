import config from "../"
import stylelint from "stylelint"
import test from "ava"

const valid = (
`
.indentation {
    color: #f00;
}
`)

const invalid = (
`
.indentation {
  color: #f00
}
`)

test("no warnings with valid css", t => {
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

test("a warning with invalid css", t => {
  return stylelint.lint({
    code: invalid,
    config: config,
  })
  .then(data => {
    const { errored, results } = data
    const { warnings } = results[0]
    t.truthy(errored, "Errors")
    t.is(warnings.length, 1, "One warning")
    t.is(warnings[0].text, "Expected indentation of 4 spaces (indentation)")
  })
})
