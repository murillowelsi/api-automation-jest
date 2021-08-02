import { SM } from '../../config/globals';
import { getRefreshToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import { validateNodeMwHeaders } from '../../helpers/headerValidations';

describe('RefreshToken', () => {
	describe('GET /requestToken', () => {
		(SM === 'de' ? it.skip : it)('should GET fresh token', async () => {
			const query = getTestData(SM);
			const response = await getRefreshToken(query);
			expect(response.status).toBe(200);
			validateNodeMwHeaders(response.headers);
			expect(response.headers).not.toHaveProperty('X-Powered-By');
			expect(response.headers).not.toHaveProperty('ETag');
		});
	});

	describe('@Negative Tests', () => {
		(SM === 'de' || SM === 'be' ? it.skip : it)('should return 401', async () => {
			const query = {
				bookingInfo: {
					bookingRef: 123,
					additionalInfo: 'Henry',
					departureDate: '2021-06-03',
				},
			};

			const response = await getRefreshToken(query);

			expect(response.status).toBe(401);
		});
	});
});
