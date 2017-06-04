import stylelint from "stylelint"
import stylelintConfig from "../"
import test from "ava"

const valid = (`
.valid {
    color: #f00;
    background: #000;
    box-shadow: 1px 1px 1px #808080;
    border-color: #424242;
}
`)

const invalid = (`
.invalid {
    color: #F00;
    background: #000000;
    box-shadow: 1px 1px 1px grey;
    border-color: #4242424242;
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
    t.is(warnings.length, 4, "4 warnings")
    t.is(warnings[0].text, "Expected \"#F00\" to be \"#f00\" (color-hex-case)")
    t.is(warnings[1].text, "Expected \"#000000\" to be \"#000\" (color-hex-length)")
    t.is(warnings[2].text, "Unexpected named color \"grey\" (color-named)")
    t.is(warnings[3].text, "Unexpected invalid hex color \"#4242424242\" (color-no-invalid-hex)")
  })
})
