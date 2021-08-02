async function findAvailableAirports(airportsGroups) {
	const airports = await airportsGroups.map((airportsGroup) => airportsGroup.airports);

	return airports.flat();
}

async function findAvailableDestinations(destinations) {
	const allDestinations = await destinations.map((destination) => destination.items).flat();
	const availableDestinations = allDestinations.filter((element) => element.available === true);

	return availableDestinations;
}

function randomIndex(data) {
	const defaultIndex = 0;
	const index = data;

	return index === undefined ? defaultIndex : Math.floor(Math.random() * index.length);
}

export { findAvailableAirports, findAvailableDestinations, randomIndex };
