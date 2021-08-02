import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import { getBookingById } from '../../services/Bookings/BookingService';
import getTestData from '../../helpers/setTestData';
import bookingSchema from '../../fixtures/schemas/BookingsSchema';
import validateSchema from '../../helpers/schemaValidation';

describe('BookingByID', () => {
	describe('GET /api/v3/bookings', () => {
		let token;
		let response;

		beforeAll(async () => {
			token = await genericToken(SM);
			const data = getTestData(SM);
			response = await getBookingById(token, data.bookingInfo.bookingRef);
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const isValidSchema = await validateSchema(bookingSchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});
