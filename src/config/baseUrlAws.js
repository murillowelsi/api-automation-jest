import axios from 'axios';
import { setEnvironmentForAws } from './setEnvironment';
import { defaultHeaderValidations } from '../helpers/headerValidations';

/* Create an axios instance to call AWS endpoints */

const awsInstance = axios.create({
	baseURL: setEnvironmentForAws(),
	validateStatus: false,
});

awsInstance.interceptors.response.use(
	(config) => {
		defaultHeaderValidations(config);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default awsInstance;
