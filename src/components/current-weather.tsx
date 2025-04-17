import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getWeatherIcon } from "@/lib/utils"

interface CurrentWeatherProps {
  data: any
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const temperature = Math.round(data.main.temp)
  const humidity = data.main.humidity
  const windSpeed = data.wind.speed
  const weatherCondition = data.weather[0].main.toLowerCase()

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <h2 className="text-xl font-semibold text-center">Current Weather</h2>
      </CardHeader>
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center">
          {getWeatherIcon(weatherCondition, "h-24 w-24 my-2")}
          <span className="text-5xl font-bold text-slate-800 dark:text-slate-100 mt-2">{temperature}°C</span>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">
            Humidity <span className="font-semibold">{humidity}%</span>
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Wind Speed <span className="font-semibold">{windSpeed} m/s</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
