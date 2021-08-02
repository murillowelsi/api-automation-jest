import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';

import {
	deleteGoLUnregisterDevice,
	getGoLMessages,
	postGoLRegisterDevice,
	postGoLSendMessage,
} from '../../services/GoL/GoLService';
import validateSchema from '../../helpers/schemaValidation';
import golMessagesHistorySchema from '../../fixtures/schemas/GoLSchema';

describe('GoL (Guide Online)', () => {
	let token;
	let data;
	let deviceNumber;

	describe('GET token and set test data', () => {
		beforeAll(async () => {
			token = await genericToken(SM);
			data = getTestData(SM);
		});

		it('token should be valid', async () => {
			expect(token).not.toBe(null);
		});
	});

	describe('GET /v2/bookings/{bookingRef}/messages', () => {
		it('should make the request and get a valid response status and schema', async () => {
			const response = await getGoLMessages(token, data.bookingInfo.bookingRef);
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const response = await getGoLMessages(token, data.bookingInfo.bookingRef);
			const isValidSchema = await validateSchema(golMessagesHistorySchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});

	describe('POST /v2/bookings/{bookingRef}/device', () => {
		it('should make the request and get a valid response', async () => {
			deviceNumber = Math.floor(Math.random() * 100000000);
			const response = await postGoLRegisterDevice(
				token,
				data.bookingInfo.bookingRef,
				deviceNumber
			);
			expect(response.status).toBe(200);
		});
	});

	describe('POST /v2/bookings/{bookingRef}/messages', () => {
		it('should make the request and get a valid response', async () => {
			const response = await postGoLSendMessage(token, data.bookingInfo.bookingRef);
			expect(response.status).toBe(200);
		});
	});

	describe('DELETE /v2/bookings/{bookingRef}/messages', () => {
		it('should make the request and get a valid response', async () => {
			const response = await deleteGoLUnregisterDevice(
				token,
				data.bookingInfo.bookingRef,
				deviceNumber
			);
			expect(response.status).toBe(202);
		});
	});
});
