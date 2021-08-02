import baseUrlAws from '../../config/baseUrlAws';
import { addHeaders } from '../../helpers/setHeaders';

async function getDestination(token, bookingRef, destinationId) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'get',
		url: `/v1/destinations/${destinationId}`,
		headers: usedHeaders,
		params: {
			bookingid: bookingRef,
		},
	});
	return response;
}

async function getDestinationDetail(
	token,
	destinationId,
	destinationCategory,
	destCategoryDetail = null
) {
	const queryParams = {
		category: destinationCategory,
	};

	if (destCategoryDetail === 'interests') {
		const objdestCategoryDetail = { categoryDetail: destCategoryDetail };
		Object.assign(queryParams, objdestCategoryDetail);
	}
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'get',
		url: `/v1/destinations/${destinationId}/detail`,
		headers: usedHeaders,
		params: queryParams,
	});
	return response;
}

export { getDestination, getDestinationDetail };
