import { getJwtToken } from '../../services/TokenServices/TokenService';

describe('JWT Token', () => {
	describe('POST https://accounts.eu1.gigya.com/accounts.getJWT', () => {
		it('should get a jwt token', async () => {
			const response = await getJwtToken();
			expect(response.status).toBe(200);
		});
	});
});
