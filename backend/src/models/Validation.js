const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = user => {
  const schema = {
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(user, schema);
};

const loginValidation = user => {
  const schema = {
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(user, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
