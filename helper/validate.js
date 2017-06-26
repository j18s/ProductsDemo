let Validator = require('jsonschema').Validator;
let v = new Validator();

let schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product",
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string",
            "maxLength": 540
        },
        "price": {
            "description": "Price in 'currency'",
            "type": "number",
            "minimum": 0
        },
        "currency": {
            "description": "ISO 4217 Currency Code",
            "type":"string",
            "minLength": 3,
            "maxLength": 3
        }

    },
    "required": ["name", "description", "price", "currency"]
};


function validate(json) {
        let flag = v.validate(json, schema);
        console.log(flag.valid);
        return flag;
    };
module.exports = validate;