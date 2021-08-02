import searchTabsSchema from '../../fixtures/schemas/SearchTabsSchema';
import validateSchema from '../../helpers/schemaValidation';
import { getSearchTabs } from '../../services/SearchTabs/SearchTabsService';

describe('SearchTabs', () => {
	let response;

	describe('GET /v1/searchtabs', () => {
		beforeAll(async () => {
			response = await getSearchTabs();
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it.todo('headers are correct');

		it('schema should be valid', async () => {
			if (response.status === 200) {
				const isValidSchema = await validateSchema(searchTabsSchema, response.data);
				expect(isValidSchema).toBe(true);
			}
		});
	});
});
