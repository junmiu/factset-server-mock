let _objPath = ['price', 'priceOpen', 'priceHigh', 'priceLow'];

function getRandom() {
	return Math.random();
}

function getInt(r) {
	return Math.floor(r);
}

function getRandomInt(max) {
  return getInt(getRandom() * max);
}

function setRandomValue(data) {
	for (let d of data) {
		for (let p of _objPath) {
			let base = getRandom() >= 0.5 ? 1:-1;
			d[p] = getRandomInt(100) * base / 100 + getInt(d[p]);
		}
	}
}

function getDummyResponeData() {
	return cloneObjDeep(dummy);
}

function cloneObjDeep(obj) {
	return JSON.parse(JSON.stringify(obj));
}

const dummy = {
  "data": [
    {
      "fsymId": "MH33D6-R",
      "date": "2019-03-29",
      "adjDate": "2014-06-09",
      "currency": "CNY",
      "price": 9.45,
      "priceOpen": 9.83,
      "priceHigh": 10.08,
      "priceLow": 9.54,
      "volume": 23563.96,
      "requestId": "CNE000000PV0"
    },
    {
      "fsymId": "Q2YN1N-R",
      "date": "2019-03-29",
      "adjDate": null,
      "currency": "HKD",
      "price": 42.1,
      "priceOpen": 41.5,
      "priceHigh": 43.2,
      "priceLow": 41.2,
      "volume": 5991.338,
      "requestId": "GB0005405286"
    },
    {
      "fsymId": "Q2YN1N-R",
      "date": "2019-03-29",
      "adjDate": null,
      "currency": "CNY",
      "price": 7.11,
      "priceOpen": 6.95,
      "priceHigh": 7.13,
      "priceLow": 6.92,
      "volume": 5991.338,
      "requestId": "CNE000001BZ9"
    },
    {
      "fsymId": "MH33D6-R",
      "date": "2019-03-29",
      "adjDate": "2014-06-09",
      "currency": "HKD",
      "price": 17.15,
      "priceOpen": 17.12,
      "priceHigh": 17.18,
      "priceLow": 16.54,
      "volume": 23563.96,
      "requestId": "CNE1000004L9"
    }
  ]
};

function factsetDataRandom() {
	let factset = getDummyResponeData();
	setRandomValue(factset.data);
	return factset.data;
}

module.exports = {
	random: factsetDataRandom
}