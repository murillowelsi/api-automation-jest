import { getItinerary } from '../../services/Itinerary/ItineraryService';
import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import validateSchema from '../../helpers/schemaValidation';
import itinerarySchema from '../../fixtures/schemas/ItinerarySchema';

describe('Itinerary', () => {
	describe('GET /requestToken and /v1/itinerary/{bookingRef}', () => {
		let token;
		let response;

		beforeAll(async () => {
			token = await genericToken(SM);
			const data = getTestData(SM);
			response = await getItinerary(token, data.bookingInfo.bookingRef);
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const isValidSchema = await validateSchema(itinerarySchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});
