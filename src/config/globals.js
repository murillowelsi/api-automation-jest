import fs from 'fs';
import yaml from 'js-yaml';

/* 
Set environment variables to be used throughout the code. If no
environment is passed on execution, it will be fetched from the yml file 
*/

const dotEnv = require('dotenv');

function setEnvVariables() {
	if (process.env.ENV == null) {
		const envs = yaml.load(fs.readFileSync('src/config/debug/environment.yml', 'utf8'));
		dotEnv.config({ path: `src/config/env/${envs.environment}.env` });
		process.env.SM = envs.market;
	}
}

setEnvVariables();

export const { SM, ENV } = process.env;
