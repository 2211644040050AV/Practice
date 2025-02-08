const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const Schema = Joi.object({
        name: Joi.string().min(10).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required(),
    });
    const {error} =Schema.validate(req.body);
    if(error) {
        return res.status(400).json({message: "Bad Request", error})
    }
    next();
}

const loginValidation = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(16).required(),
    });
    const {error} =Schema.validate(req.body);
    if(error) {
        return res.status(400).json({message: "Bad Request", error});
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}