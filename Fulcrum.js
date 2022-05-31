console.log("This is working!")






import { Client } from 'fulcrum-app';

const client = new Client('your-api-token');

client.query('SELECT * FROM "Manhole Inspections" LIMIT 1;')
  .then(result => console.log(result))
  .catch(error => console.log(error));

// or to get GeoJSON
client.query('SELECT * FROM "Manhole Inspections" LIMIT 1;', 'geojson')
  .then(geojson => console.log(geojson.features[0].geometry.coordinates[0]))
  .catch(error => console.log(error));



  import { getUser } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const getUser = fulcrum.getUser;

getUser('name@email.com', 'password')
  .then((user) => {
    console.log(user);
    // user.contexts is an array of the organizations you belong to. Use These
    // ids with createAuthorization to create API tokens.
  })
  .catch((error) => {
    console.log(error.message);
  });




  import { createAuthorization } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const createAuthorization = fulcrum.createAuthorization;

const email = 'name@email.com';
const password = 'password';
const organizationId = 'organization-id-from-getUser';
const userId = 'optional user id';
const note = 'My awesome app version 4.20';
const timeout = 60 * 60 * 24;

createAuthorization(email, password, organizationId, note, timeout, userId)
  .then((authorization) => {
    console.log(authorization);
    // authorization.token is your API token to use with the rest of the API.
  })
  .catch((error) => {
    console.log(error.message);
  });

