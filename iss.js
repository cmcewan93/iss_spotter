/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');
const ipUrl = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(ipUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      let ip = JSON.parse(body);
      callback(null, ip);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
    } else {
      let location = JSON.parse(body);
      let latLong = {
        latitude: location.data.latitude,
        longitude: location.data.longitude,
      };

      callback(null, latLong);
    }
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP};