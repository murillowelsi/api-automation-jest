import fs from 'fs';
import yaml from 'js-yaml';
import getTestData from './setTestData';
import { ENV, SM } from '../config/globals';

/*
 Fetches information from the fixtures/headers/headers.yml file, and returns an 
 object with the headers according to source market, environment variable and country.
 */

const headersConfig = yaml.load(fs.readFileSync('src/fixtures/headers/headers.yml', 'utf8'));

function setHeaders(backend) {
	const { sharedHeaders } = headersConfig;
	const backendHeaders =
		backend === 'NODE' ? headersConfig.nodeHeaders : headersConfig.awsHeaders[ENV];
	const appName = getTestData(SM);
	const appHeaders = headersConfig[appName.bookingType];

	return {
		...sharedHeaders,
		...backendHeaders,
		...appHeaders,
	};
}

function addHeaders(additionalHeaders, env) {
	const headers = setHeaders(env);
	Object.assign(headers, additionalHeaders);
	return headers;
}

export { setHeaders, addHeaders };
