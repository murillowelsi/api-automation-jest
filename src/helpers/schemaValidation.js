import Ajv from 'ajv';

const ajv = new Ajv({ strict: false });

async function validateSchema(expectedSchema, actualSchema) {
	const validate = ajv.compile(expectedSchema);
	const schema = validate(actualSchema);

	if (schema) {
		return schema;
	}
	console.log(validate.errors);
	return schema;
}

export default validateSchema;
