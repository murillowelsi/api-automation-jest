import { addHeaders } from '../../helpers/setHeaders';
import baseUrlAws from '../../config/baseUrlAws';

async function getGoLMessages(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'get',
		url: `/v2/bookings/${bookingRef}/messages`,
		headers: usedHeaders,
	});
	return response;
}

async function postGoLRegisterDevice(token, bookingRef, deviceNumber) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'post',
		url: `/v2/bookings/${bookingRef}/device`,
		headers: usedHeaders,
		data: {
			deviceToken: `deviceToken${deviceNumber}`,
			protocol: 'APNs',
		},
	});
	return response;
}

async function postGoLSendMessage(token, bookingRef) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'post',
		url: `/v2/bookings/${bookingRef}/messages`,
		headers: usedHeaders,
		data: {
			sendMessage: {
				body: `TDA Automation Test, timestamp: ${Date.now()}`,
			},
		},
	});
	return response;
}

async function deleteGoLUnregisterDevice(token, bookingRef, deviceNumber) {
	const additionalHeaders = { 'mw-token': token };
	const usedHeaders = addHeaders(additionalHeaders, 'AWS');

	const response = await baseUrlAws({
		method: 'delete',
		url: `/v1/chat/unregisterDevice`,
		headers: usedHeaders,
		data: {
			deviceToken: `deviceToken${deviceNumber}`,
			protocol: 'APNs',
			bookings: [
				{
					id: `${bookingRef}`,
					token: `${token}`,
				},
			],
		},
	});
	return response;
}

export { getGoLMessages, postGoLRegisterDevice, postGoLSendMessage, deleteGoLUnregisterDevice };
