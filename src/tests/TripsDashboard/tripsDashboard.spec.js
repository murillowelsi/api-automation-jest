import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import { getTripDashboard } from '../../services/TripsDashBoard/TripsDashboardService';
import validateSchema from '../../helpers/schemaValidation';
import tripsDashboardSchema from '../../fixtures/schemas/TripsDashboardSchema';

describe('Trips Dashboard', () => {
	describe('GET /requestToken and /v1/bookings/{bookingRef}/dashboard', () => {
		let token;
		let response;

		beforeAll(async () => {
			token = await genericToken(SM);
			const data = getTestData(SM);
			response = await getTripDashboard(token, data.bookingInfo.bookingRef);
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const isValidSchema = await validateSchema(tripsDashboardSchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});
