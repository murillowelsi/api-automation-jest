import baseUrlNode from '../../config/baseUrlNode';

baseUrlNode.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
);

async function getHealthCheck() {
	const response = await baseUrlNode({
		method: 'get',
		url: '/h34lthch3ck',
	});

	return response;
}

export { getHealthCheck };
