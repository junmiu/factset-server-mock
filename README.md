# factset-server-mock
mock the factset server

## Important
The default port is `3030`, api url is `content/factset-prices/v1/prices`.

## Example
```
const axios = require('axios');

async function run() {
  let uri = 'http://localhost:3030/content/factset-prices/v1/prices';
  let res = await axios.post(
    uri, {
      ids: ["CNE000000PV0","GB0005405286"],
      startDate:"2019-01-01",
      endDate:"2019-12-31",
      frequency:"D",
      calendar:"FIVEDAY",
      currency:"LOCAL",
      adjust:"SPLIT"
    }
  );
  console.log(res.data);
}

run();

```

## Run

```
$ npm run dev
```
