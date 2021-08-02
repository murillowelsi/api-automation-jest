import { addHeaders } from '../../helpers/setHeaders';
import baseUrlAws from '../../config/baseUrlAws';

async function getItinerary(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'get',
		url: `/v1/itinerary/${bookingRef}`,
		headers: usedHeaders,
	});
	return response;
}

export { getItinerary };
