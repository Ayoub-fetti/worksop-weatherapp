import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherDisplay from './components/WeatherDisplay'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WEATHER_API_URL}/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error('City not found')
      }
      
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 p-4">
      <div className="max-w-md mx-auto pt-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Weather App</h1>
        <SearchBar onSearch={fetchWeather} />
        <WeatherDisplay weatherData={weatherData} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default App
