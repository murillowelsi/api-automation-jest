import { SM } from '../config/globals';

function validateNodeMwHeaders(headers) {
	expect(headers).toHaveProperty('mw-token');
	if (SM !== 'de') {
		expect(headers).toHaveProperty('mw-resources-access');
		expect(headers).toHaveProperty('mw-token-expiry');
	}
}

function defaultHeaderValidations(config) {
	if (config.status !== 204) {
		expect(config.headers).toHaveProperty('content-type');
	}
}

export { validateNodeMwHeaders, defaultHeaderValidations };
