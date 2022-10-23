// fetch('https://restcountries.com/v3.1/all')
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((countries) => {
//     console.log(countries);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
// .then((weatherResponse) => { // single country's weather
//   return weatherResponse.json(); // returns a promise
// })
// .then((weather) => {

//   const { main: { temp, humidity, sea_level, grnd_level } } = weather;

//   console.log(`${country.name.common}(${country.flag})
//     Temp: ${temp}
//     Ground Level: ${grnd_level}
//     Humidity: ${humidity}
//     Sea Level: ${sea_level}
//   `);
// })


// async function always returns a promise constructed returned value
const getCountries = async () => {


  try {

    // using await is the sole purpose for making a function async 

    const response = await fetch('https://restcountries.com/v3.1/all'); // await should be applied only promise 

    const countries = await response.json(); // response.json() again returns a promise

    countries.slice(0, 5).forEach(async (country) => {
      try {
        const [lat, lon] = country.latlng;
        const API_KEY = '991f626650507e6605c2ca33f8edc191';

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

        const weather = await weatherResponse.json();
        const { main: { temp, humidity, sea_level, grnd_level } } = weather;

        console.log(`${country.name.common}(${country.flag})
          Temp: ${temp}
          Ground Level: ${grnd_level}
          Humidity: ${humidity}
          Sea Level: ${sea_level}
        `);
      } catch (err) {
        console.log(err);
      }
    })
  } catch (error) {
    console.log(error);
  }


  // return is **not** suggested for async function 
};

getCountries();
