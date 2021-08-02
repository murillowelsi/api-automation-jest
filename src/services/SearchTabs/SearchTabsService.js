import baseUrlAws from '../../config/baseUrlAws';
import { setHeaders } from '../../helpers/setHeaders';

async function getSearchTabs() {
	const response = await baseUrlAws({
		method: 'get',
		url: '/v1/searchtabs',
		headers: setHeaders('AWS'),
	});

	return response;
}

export { getSearchTabs };
