const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!weatherData) {
    return <div className="text-center py-8 text-gray-500">Search for a city to see weather information</div>;
  }

  const { name, main, weather, wind } = weatherData;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 capitalize">{weather[0].description}</p>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          className="w-20 h-20"
        />
        <span className="text-4xl font-bold text-gray-800 ml-4">{temp}°C</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-600">Feels like</p>
          <p className="font-semibold">{feelsLike}°C</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-600">Humidity</p>
          <p className="font-semibold">{main.humidity}%</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-600">Wind Speed</p>
          <p className="font-semibold">{wind.speed} m/s</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-600">Pressure</p>
          <p className="font-semibold">{main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;