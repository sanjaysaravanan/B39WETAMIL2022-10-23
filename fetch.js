// // Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// // // Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v3.1/all", true);

// // Send the Request to the Server 
request.send(null);

// // login api with details
// request.send({ email: 'sanjay@gmail.com', password: 'xxxxxxx' });

// Parse the Text Passed on from the server
request.onload = function () {
  var response = JSON.parse(request.responseText);
  console.log('Success', response);
}

request.onerror = function () {
  console.log('Facling some try later');
}


// default API HTTP Method GET ---> READ operation

const API_KEY = '991f626650507e6605c2ca33f8edc191';

fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    console.log(response);
    // use chaining by returning the promise
    return response.json(); // response.json() return a promise
  })
  .then((countries) => {
    console.log(countries);
    // countries.forEach(country => console.log(`${country.name.common}(${country.flag})`));

    countries.slice(0, 5).forEach((country) => {
      const [lat, lon] = country.latlng;

      // find weather for all the countries in each iteration
      // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((weatherResponse) => { // single country's weather
          return weatherResponse.json(); // returns a promise
        })
        .then((weather) => {

          const { main: { temp, humidity, sea_level, grnd_level } } = weather;

          console.log(`${country.name.common}(${country.flag})
            Temp: ${temp}
            Ground Level: ${grnd_level}
            Humidity: ${humidity}
            Sea Level: ${sea_level}
          `);
        })
    })

  })
  .catch((error) => {
    console.log(error);
  })















