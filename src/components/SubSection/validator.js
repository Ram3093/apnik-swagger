import Joi from 'joi';
import { requiredString, optionalString } from '../../helper/joiKeys.js';

const schemas = {
	create: {
		body: Joi.object()
			.keys({
				name: requiredString,
				description: requiredString,
			})
			.unknown(false),
		params: Joi.object()
			.keys({
				uid: requiredString,
			})
			.unknown(false),
	},
	patch: {
		body: Joi.object()
			.keys({
				name: optionalString,
				description: optionalString,
			})
			.unknown(false),
		params: Joi.object()
			.keys({
				uid: requiredString,
			})
			.unknown(false),
	},
	uid: {
		params: Joi.object()
			.keys({
				uid: requiredString,
			})
			.unknown(false),
	},
};
export default schemas;
