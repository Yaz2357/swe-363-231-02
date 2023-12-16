const books = [
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
    }
  ];
  
  const generateTable = () => {
    let html = `<tr> <th>Title</th> <th>Author</th> <th>Genre</th> <th>Price</th> </tr>`;
  
    books.forEach(book => {
      html += `<tr> <td>${book.Title}</td> <td>${book.Author}</td> <td>${book.Genre}</td> <td>${book.Price}</td> </tr>`;
    });
  
    document.getElementById("top-selling-table").innerHTML = html;
  };
  
  const fetchWeatherData = () => {
    const cities = ['Khobar', 'Riyadh', 'New York'];
    const randomIndex = Math.floor(Math.random() * cities.length);
    const city = cities[randomIndex];
  
    const drawWeather = (weatherData,CityName) => {
      const temperature = weatherData.main.temp;
      const canvas = document.getElementById('weather-canvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '20px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(`The ${CityName} city Temperature is ${temperature}°C`, 10, 30);
    };
  
    const fetchWeather = (CityName) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=63693afd04404d7615059bce6d9818d8&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
          drawWeather(weatherData,CityName);
        })
        .catch(error => {
          console.log('Error fetching weather data:', error);
        });
    };
  
    fetchWeather(city);
  };
  
  generateTable();
  fetchWeatherData();
  setInterval(fetchWeatherData, 1500);