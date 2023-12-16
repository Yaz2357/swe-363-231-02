books = [
    {
        Title: "The Catcher in the Rye",
        Author: "J.D. Salinger",
        Genre: "Fiction",
        Price: "$9.99"
    },

    {
        Title: "Animal Farm",
        Author: "George Orwell",
        Genre: "Dystopian",
        Price: "$12.99"
    },

    {
        Title: "1984",
        Author: "George Orwell",
        Genre: "Dystopian",
        Price: "$7.99"
    },
]

var html = `<tr> <th>Title</th> <th>Author</th> <th>Genre</th> <th>Price</th> </tr>`;

for(let i=0; i<books.length;i++){
    html += `<tr> <td>${books[i].Title}</td> <td>${books[i].Author}</td> <td>${books[i].Genre}</td> <td>${books[i].Price}</td> </tr>`;
}
document.getElementById("top-selling-table").innerHTML= html;

const canvas = document.getElementById('weather-canvas');
const ctx = canvas.getContext('2d');
const cities = ['Khobar', 'Riyadh', 'New York'];

function drawWeather(weatherData,City) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw weather information on the canvas
  // Example: Display temperature
  const temperature = weatherData.main.temp;
  ctx.font = '20px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText(`The ${City} city Temperature is ${temperature}°C`, 10, 30);
}

function fetchWeatherData() {
    const randomIndex = Math.floor(Math.random() * cities.length);
  // Make an API call to retrieve weather data
  // Replace 'YOUR_API_KEY' with your actual API key
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[randomIndex]}&appid=63693afd04404d7615059bce6d9818d8&units=metric`)
    .then(response => response.json())
    .then(weatherData => {
      // Call the drawWeather function to render the data on the canvas
      drawWeather(weatherData,cities[randomIndex]);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Call fetchWeatherData initially
fetchWeatherData();

// Call fetchWeatherData every 10 seconds
setInterval(fetchWeatherData, 1500);
