import baseUrlNode from '../../config/baseUrlNode';
import { addHeaders } from '../../helpers/setHeaders';
import {
	findAvailableAirports,
	findAvailableDestinations,
	randomIndex,
} from '../../helpers/holidaySearchHelpers';

const xAccessToken = '69a79ab88d7923ddc75c6e9439dfa5de30007f3864bea63d323e22aefc101bfc';

async function getHolidayConfig() {
	const additionalHeaders = {
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v2/holidays/configuration',
		headers: usedHeaders,
	});
	return response;
}

async function getHolidaySearchHolDuration() {
	const additionalHeaders = {
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v1/holidays/search',
		headers: usedHeaders,
	});

	const holidayDurationRandomInt = randomIndex(response.data.durations);
	const holDuration = await response.data.durations[holidayDurationRandomInt].id;
	const query = {};

	query.holDuration = holDuration;
	return query;
}

async function getHolidaySearchHolFrom(query) {
	const additionalHeaders = {
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v1/holidays/search',
		headers: usedHeaders,
		params: {
			duration: query.holDuration,
		},
	});

	const airportsGroups = await response.data.flightsFrom.airportsGroup;
	const availableAirports = await findAvailableAirports(airportsGroups);
	const randomAirportIndex = await randomIndex(availableAirports);
	const holFrom = await availableAirports[randomAirportIndex].id;

	query.holFrom = holFrom;
	return query;
}

async function getHolidaySearchHolTo(query) {
	const additionalHeaders = {
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v1/holidays/search',
		headers: usedHeaders,
		params: {
			'from[]': query.holFrom,
			duration: query.holDuration,
		},
	});

	const destinationsGroups = await response.data.destinationsList.destinationsGroup;
	const availableDestinations = await findAvailableDestinations(destinationsGroups);
	const randomDestinationIndex = randomIndex(availableDestinations);
	const destinations = availableDestinations[randomDestinationIndex];

	let holTo = destinations === undefined ? (holTo = '') : (holTo = destinations.id);

	query.holTo = holTo;
	return query;
}

async function getHolidaySearchHolDepartureDate(query) {
	const additionalHeaders = {
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v1/holidays/search',
		headers: usedHeaders,
		params: {
			'from[]': query.holFrom,
			'to[]': query.holTo,
			duration: query.holDuration,
		},
	});

	const departureDatesAmount = await response.data.departureDates;
	const randomDepartureDateIndex = await randomIndex(departureDatesAmount);
	const holDepartureDate = await response.data.departureDates[randomDepartureDateIndex];

	query.holDepartureDate = holDepartureDate;
	return query;
}

async function getHolidaySearchResults(query) {
	const additionalHeaders = {
		'device-id': '0',
		'x-access-token': xAccessToken,
	};
	const usedHeaders = addHeaders(additionalHeaders, 'NODE');

	const response = await baseUrlNode({
		method: 'get',
		url: '/api/v4/holidays/searchresults',
		headers: usedHeaders,
		params: {
			'from[]': query.holFrom,
			'to[]': query.holTo,
			departureDate: query.holDepartureDate,
			duration: query.holDuration,
			numberOfAdults: 2,
			pageNumber: 1,
			numberOfResultsPerPage: 10,
			numberOfChildren: 0,
		},
	});
	return response;
}

export {
	getHolidayConfig,
	getHolidaySearchHolDuration,
	getHolidaySearchHolFrom,
	getHolidaySearchHolTo,
	getHolidaySearchHolDepartureDate,
	getHolidaySearchResults,
};
