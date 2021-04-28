/*
    schema: {
        body: Joi.object().keys({}),
        params: Joi.object().keys({}),
        query: Joi.object().keys({}),
    }
*/

const requestValidator = (schema) => {
	return (req, res, next) => {
		const schemaParams = Object.keys(schema);

		let isValid = true;
		let schemaError;

		schemaParams.every((schemaParam) => {
			const { error } = schema[schemaParam].validate(req[schemaParam], {
				abortEarly: false,
			});

			isValid = error == null;
			schemaError = error;

			return isValid;
		});

		if (isValid) {
			next();
		} else {
			const { details } = schemaError;
			const message = details.map((i) => i.message);

			res.status(422).send({ status: false, error: message });
		}
	};
};

export default requestValidator;
