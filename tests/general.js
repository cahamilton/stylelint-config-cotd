import config from "../"
import stylelint from "stylelint"
import test from "ava"

const valid = (`
// 
// Ipsum cillum veniam nostrud commodo exercitation. Irure veniam exercitation deserunt id do. 
// Occaecat amet ex ex tempor Lorem reprehenderit non occaecat
// 
.valid {
    color: #f00;
    background: #00f;


    font-weight: 700;
    
    .one {
        .two {
            .three {
                font-size: 4em;
            }
        }
    }
}
`)

const invalid = (`
// 
// Ipsum cillum veniam nostrud commodo exercitation. Irure veniam exercitation deserunt id do. Occaecat amet ex ex tempor Lorem reprehenderit non occaecat
//
.invalid {
  color: #f00;
    background: #00f;



    font-weight: 700;
    
    .one { .two { .three { .four { font-size: 5em; } } } }
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
    t.is(warnings.length, 4, "4 warnings")
    t.is(warnings[0].text, "Expected indentation of 4 spaces (indentation)")
    t.is(warnings[1].text, "Expected no more than 2 empty line(s) (max-empty-lines)")
    t.is(warnings[2].text, "Expected line length to be no more than 100 characters (max-line-length)")
    t.is(warnings[3].text, "Expected nesting depth to be no more than 3 (max-nesting-depth)")
  })
})
