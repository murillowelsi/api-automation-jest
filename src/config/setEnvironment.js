import { ENV } from './globals';

require('dotenv').config({ path: `src/config/env/${ENV}.env` });

/* Set the baseURL according to environment and source market */

const { BASE_URL_NODE, BASE_URL_AWS } = process.env;

const setEnvironmentForNode = (sm) =>
	ENV === 'prod' && sm === 'nl'
		? BASE_URL_NODE.replace('SM', `${sm}02`)
		: BASE_URL_NODE.replace('SM', sm);

const setEnvironmentForAws = () => BASE_URL_AWS;

export { setEnvironmentForNode, setEnvironmentForAws };
