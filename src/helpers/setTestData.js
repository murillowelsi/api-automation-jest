import fs from 'fs';
import yaml from 'js-yaml';
import { ENV } from '../config/globals';

/* 
Fetches the booking data in fixtures/data/${ENV}.yml, and returns
the booking information according to source market, environment variable and country. 
*/

const devTestData = yaml.load(fs.readFileSync('src/fixtures/data/dev.yml', 'utf8'));
const prodTestData = yaml.load(fs.readFileSync('src/fixtures/data/prod.yml', 'utf8'));

const testData = ENV === 'prod' ? prodTestData : devTestData;

function getTestData(bookingType) {
	return testData[bookingType];
}

export default getTestData;
