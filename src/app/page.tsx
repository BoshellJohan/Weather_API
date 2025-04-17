"use client"

import { useState, useEffect } from "react"
import WeatherSearch from "@/components/weather-search"
import CurrentWeather from "@/components/current-weather"
import ForecastCard from "@/components/forecast-card"
import ErrorMessage from "@/components/error-message"
import { getCityWeather, getInfoEach3Hours } from "@/lib/api"

export default function WeatherApp() {
  const [city, setCity] = useState("")
  const [currentCity, setCurrentCity] = useState("")
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastData, setForecastData] = useState([])
  const [currentForecastIndex, setCurrentForecastIndex] = useState(0)
  const [error, setError] = useState("")

  useEffect(() => {
    const savedCity = localStorage.getItem("city") || "Bogota"
    loadCityData(savedCity)
  }, [])

  const loadCityData = async (cityName: string) => {
    try {
      setCurrentCity(cityName)

      // Get current weather
      const weatherData = await getCityWeather(cityName)
      setCurrentWeather(weatherData)

      // Get forecast data
      const forecastResponse = await getInfoEach3Hours(cityName)
      setForecastData(forecastResponse.list)
      setCurrentForecastIndex(0)

      // Save to localStorage
      localStorage.setItem("city", cityName)
    } catch (err) {
      setError("Failed to load weather data. Please try again.")
      setTimeout(() => setError(""), 3000)
    }
  }

  const handleCitySearch = (cityName: string) => {
    if (!cityName.trim()) {
      setError("Please fill the input.")
      setTimeout(() => setError(""), 3000)
      return
    }

    if (!/^[a-zA-Z]+$/g.test(cityName.trim())) {
      setError("Please provide a valid city.")
      setTimeout(() => setError(""), 3000)
      return
    }

    loadCityData(cityName.trim())
    setCity("")
  }

  const handlePrevForecast = () => {
    if (currentForecastIndex > 0) {
      setCurrentForecastIndex(currentForecastIndex - 1)
    }
  }

  const handleNextForecast = () => {
    if (currentForecastIndex < forecastData.length - 1) {
      setCurrentForecastIndex(currentForecastIndex + 1)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            WEATHER QUERY
          </h1>
          {currentCity && (
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200">{currentCity}</h3>
          )}
        </div>

        {/* Search Form */}
        <WeatherSearch city={city} setCity={setCity} onSearch={handleCitySearch} />

        {/* Error Message */}
        {error && <ErrorMessage message={error} />}

        {/* Weather Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Current Weather */}
          {currentWeather && <CurrentWeather data={currentWeather} />}

          {/* Forecast */}
          {forecastData.length > 0 && (
            <ForecastCard
              data={forecastData[currentForecastIndex]}
              index={currentForecastIndex}
              total={forecastData.length}
              onPrev={handlePrevForecast}
              onNext={handleNextForecast}
            />
          )}
        </div>
      </div>
    </main>
  )
}
