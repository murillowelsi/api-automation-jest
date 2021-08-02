import axios from 'axios';
import baseUrlNode from '../../config/baseUrlNode';
import { setHeaders } from '../../helpers/setHeaders';
import getTestData from '../../helpers/setTestData';

async function getRefreshToken(query) {
	const response = await baseUrlNode({
		method: 'get',
		url: '/api/auth/requestToken',
		headers: setHeaders('NODE'),
		params: {
			id: query.bookingInfo.bookingRef,
			additionalInfo: query.bookingInfo.additionalInfo,
			departureDate: query.bookingInfo.departureDate,
		},
	});
	return response;
}

async function getDeToken(body) {
	const response = await baseUrlNode({
		method: 'post',
		url: '/api/auth/userlogin',
		headers: setHeaders('NODE'),
		data: {
			username: body.bookingInfo.username,
			password: body.bookingInfo.password,
			withBookingSummaries: body.bookingInfo.withBookingSummaries,
		},
	});
	return response;
}

async function getJwtToken() {
	const response = await axios({
		method: 'post',
		url: 'https://accounts.eu1.gigya.com/accounts.getJWT',
		headers: {
			'Content-Type': 'application/json',
		},
		params: {
			apiKey: '3_ADsIAbbc8UsB_xTdVln-kvmjw0cqpMt5nXG7JDsPp_XVxqou2fYdoC8XALb8w2Mx',
			secret: 'wvx96GqP2PtCyQ0UVpf2Dmy2PbS6ljeC',
			targetUID: 'f842f89334454e9697b1a95b59a05e5c',
			userKey: 'AMzMe4zx+xys',
		},
	});
	return response;
}

async function genericToken(sm) {
	let mwToken;
	const body = getTestData(sm);
	if (sm === 'de') {
		const response = await getDeToken(body);
		mwToken = response.headers['mw-token'];
	} else {
		const response = await getRefreshToken(body);
		mwToken = response.headers['mw-token'];
	}
	return mwToken;
}

export { getRefreshToken, getDeToken, getJwtToken, genericToken };
