import baseUrlNode from '../../config/baseUrlNode';
import { addHeaders } from '../../helpers/setHeaders';

async function getBookingById(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: `/api/v3/bookings/${bookingRef}`,
		headers: usedHeaders,
	});
	return response;
}

async function getAncillary(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: `/api/v3/bookings/${bookingRef}/ancillary`,
		headers: usedHeaders,
	});
	return response;
}

export { getBookingById, getAncillary };
