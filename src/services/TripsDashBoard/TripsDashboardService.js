import { addHeaders } from '../../helpers/setHeaders';
import baseUrlAws from '../../config/baseUrlAws';

async function getTripDashboard(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'get',
		url: `/v1/bookings/${bookingRef}/dashboard`,
		headers: usedHeaders,
	});
	return response;
}

export { getTripDashboard };
