import { getHealthCheck } from '../../services/HealthCheck/HealthCheckService';
import validateSchema from '../../helpers/schemaValidation';
import healthCheckSchema from '../../fixtures/schemas/HealthCheckSchema';

describe('HealthCheck', () => {
	describe('GET /h34lthch3ck', () => {
		it('status code should be 200', async () => {
			const response = await getHealthCheck();
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			const response = await getHealthCheck();
			const isValidSchema = await validateSchema(healthCheckSchema, response.data);
			expect(isValidSchema).toBe(true);
		});
	});
});
