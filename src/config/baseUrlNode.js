import axios from 'axios';
import { setEnvironmentForNode } from './setEnvironment';
import { SM } from './globals';
import { defaultHeaderValidations } from '../helpers/headerValidations';

/* Create an axios instance to call NODE endpoints */

const nodeInstance = axios.create({
	validateStatus: false,
	baseURL: setEnvironmentForNode(SM),
});

nodeInstance.interceptors.response.use(
	(config) => {
		defaultHeaderValidations(config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default nodeInstance;
