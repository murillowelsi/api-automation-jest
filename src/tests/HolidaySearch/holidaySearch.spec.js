import {
	getHolidayConfig,
	getHolidaySearchHolDuration,
	getHolidaySearchHolFrom,
	getHolidaySearchHolTo,
	getHolidaySearchHolDepartureDate,
	getHolidaySearchResults,
} from '../../services/HolidaySearch/HolidaySearchService';
import holidaySearchResultsSchema from '../../fixtures/schemas/HolidaySearchResultsSchema';
import holidaySearchConfigSchema from '../../fixtures/schemas/HolidayConfigurationSchema';
import validateSchema from '../../helpers/schemaValidation';

describe('Holiday Search', () => {
	describe('GET /holidays/configuration', () => {
		let response;

		beforeAll(async () => {
			response = await getHolidayConfig();
		});

		it('status code should be 200', async () => {
			expect(response.status).toBe(200);
		});

		it('schema should be valid', async () => {
			if (response.status === 200) {
				const isValidSchema = await validateSchema(holidaySearchConfigSchema, response.data);
				expect(isValidSchema).toBe(true);
			}
		});
	});

	describe('GET /holidays/search and /holidays/searchresults', () => {
		let holDuration;
		let holFrom;
		let holTo;
		let holDepartureDate;
		let response;

		beforeAll(async () => {
			holDuration = await getHolidaySearchHolDuration();
			holFrom = await getHolidaySearchHolFrom(holDuration);
			holTo = await getHolidaySearchHolTo(holFrom);
			holDepartureDate = await getHolidaySearchHolDepartureDate(holTo);
			response = await getHolidaySearchResults(holDepartureDate);
		});

		it('schema should be valid', async () => {
			if (response.status === 200) {
				const isValidSchema = await validateSchema(holidaySearchResultsSchema, response.data);
				expect(isValidSchema).toBe(true);
			}
		});

		it('PackageId and ProcutCode should not be null', async () => {
			if (response.status === 200) {
				const holResult = response.data.searchResult.holidays[0];

				expect(holResult.packageId).not.toBe(null);
				expect(holResult.productCode).not.toBe(null);
			} else if (response.status === 204) {
				console.log({
					message: `No holidays found. Everything's gonna be fine!`,
					code: `${response.status}.`,
				});
			}
		});
	});
});
