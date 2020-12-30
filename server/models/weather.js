const request = require('request-promise');

const WEATHER_API_KEY = '1899bb0353ced0b11b92264a57ca0094'

require('dotenv').config();

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1899bb0353ced0b11b92264a57ca0094`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Could not reach OpenWeatherMap API.' });
    });
  }
}

module.exports = Weather;