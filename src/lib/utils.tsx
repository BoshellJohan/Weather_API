import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Cloud, CloudRain, CloudSnow, CloudFog, Sun, CloudLightning, CloudDrizzle } from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWeatherIcon(condition: string, className = "h-6 w-6") {
  switch (condition.toLowerCase()) {
    case "clear":
      return <Sun className={`${className} text-amber-500`} />
    case "clouds":
      return <Cloud className={`${className} text-gray-500`} />
    case "rain":
      return <CloudRain className={`${className} text-blue-500`} />
    case "drizzle":
      return <CloudDrizzle className={`${className} text-blue-400`} />
    case "thunderstorm":
      return <CloudLightning className={`${className} text-purple-500`} />
    case "snow":
      return <CloudSnow className={`${className} text-sky-200`} />
    case "mist":
    case "fog":
    case "haze":
      return <CloudFog className={`${className} text-gray-400`} />
    default:
      return <Cloud className={`${className} text-gray-500`} />
  }
}
