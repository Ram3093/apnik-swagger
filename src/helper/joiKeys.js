import Joi from 'joi';

export const ID = Joi.string().required();

export const optionalString = Joi.string().optional();
export const requiredString = Joi.string().required();
export const requiredNumber = Joi.number().required();
export const optionalNumber = Joi.number().optional();
export const arrayString = Joi.array().items(Joi.string());
export const optionalBoolean = Joi.boolean().optional();
export const requiredBoolean = Joi.boolean().required();
export const requiredUrl = Joi.string().uri().required();
export const optionalUrl = Joi.string().uri().optional();
