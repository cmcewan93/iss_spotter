// index.js
const {fetchCoordsByIP, fetchMyIP} = require('./iss');
let myIP;

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  //console.log('It worked! Returned IP:' , ip);
  myIP = ip.ip;
  //console.log('this is ur ip: ' + myIP);
});
console.log('this is ur ip: ' + myIP);

fetchCoordsByIP('66.207.199.230', (error, data) => {
  if (error) {
    console.log('This is your error' + error);
  }
  console.log(data);
});
