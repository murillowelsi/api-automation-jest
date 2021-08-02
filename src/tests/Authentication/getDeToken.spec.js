import { SM } from '../../config/globals';
import { getDeToken } from '../../services/TokenServices/TokenService';
import getTestData from '../../helpers/setTestData';
import { validateNodeMwHeaders } from '../../helpers/headerValidations';

describe('User Login DE', () => {
	describe('GET /api/auth/userlogin', () => {
		(SM !== 'de' ? it.skip : it)('should GET DE fresh token', async () => {
			const body = getTestData(SM);
			const response = await getDeToken(body);
			expect(response.status).toBe(200);
			validateNodeMwHeaders(response.headers);
		});
	});
});
