import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import { getAncillary } from '../../services/Bookings/BookingService';
import validateSchema from '../../helpers/schemaValidation';
import ancillarySchema from '../../fixtures/schemas/AncillarySchema';

describe('Ancillary', () => {
	describe('GET /api/v3/bookings/{bookingRef}/ancillary', () => {
		let token;
		let response;

		beforeAll(async () => {
			token = await genericToken(SM);
			const data = getTestData(SM);
			response = await getAncillary(token, data.bookingInfo.bookingRef);
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const isValidSchema = await validateSchema(ancillarySchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});
