import { SM } from '../../config/globals';
import { genericToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import {
	getDestination,
	getDestinationDetail,
} from '../../services/Destination/DestinationService';
import validateSchema from '../../helpers/schemaValidation';
import destinationSchema from '../../fixtures/schemas/DestinationSchema';

describe('Destination', () => {
	describe('GET /v1/destinations/{destinationId}?bookingId={bookingRef}', () => {
		let token;
		let response;
		let destinationId;

		beforeAll(async () => {
			token = await genericToken(SM);
			destinationId = 'D0005'; // Need to find a way to make this dinamic
			const data = getTestData(SM);
			response = await getDestination(token, data.bookingInfo.bookingRef, destinationId);
		});

		it('Status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const isValidSchema = await validateSchema(destinationSchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});

describe('DestinationDetail', () => {
	describe('GET /destinationDetail', () => {
		let token;
		let response;
		let destinationResponse;
		let destinationId;
		let destinationCategory;
		let categoryDetail;

		beforeAll(async () => {
			token = await genericToken(SM);
			destinationId = 'D0005'; // Need to find a way to make this dinamic
		});

		beforeAll(async () => {
			const data = getTestData(SM);
			response = await getDestination(token, data.bookingInfo.bookingRef, destinationId);
			categoryDetail =
				response.data.tabs.explore.sections.sitesOfInterest.recommendations.recommendationList[0]
					.title;
			destinationCategory = response.data.tabs.explore.sections.whatToDo.whatToDoList[0].iconName;
		});

		beforeAll(async () => {
			destinationResponse = await getDestinationDetail(
				token,
				destinationId,
				destinationCategory,
				categoryDetail
			);
		});

		it('Status code should be 200', async () => {
			expect(destinationResponse.status).toBe(200);
		});

		it.todo('Validate something');
	});
});
