"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getWeatherIcon } from "@/lib/utils"

interface ForecastCardProps {
  data: any
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export default function ForecastCard({ data, index, total, onPrev, onNext }: ForecastCardProps) {
  const [date, time] = data.dt_txt.split(" ")
  const formattedTime = time.slice(0, 5)
  const temperature = Math.round(data.main.temp)
  const weatherCondition = data.weather[0].main
  const weatherIcon = data.weather[0].main.toLowerCase()

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <h2 className="text-xl font-semibold text-center">
          Forecast Each 3 Hours{" "}
          <span className="text-sm">
            ({index + 1}/{total})
          </span>
        </h2>
      </CardHeader>
      <CardContent className="p-6 text-center bg-gradient-to-b from-blue-50 to-sky-100 dark:from-slate-800 dark:to-slate-700">
        <div className="flex flex-col items-center">
          {getWeatherIcon(weatherIcon, "h-24 w-24 my-2")}
          <span className="text-5xl font-bold text-slate-800 dark:text-slate-100 mt-2">{temperature}°C</span>
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-1">{weatherCondition}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between bg-white dark:bg-slate-800">
        <Button onClick={onPrev} disabled={index === 0} variant="outline" size="sm" className="flex items-center cursor-pointer">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Prev
        </Button>
        <div className="text-center">
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{formattedTime}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{date}</p>
        </div>
        <Button
          onClick={onNext}
          disabled={index === total - 1}
          variant="outline"
          size="sm"
          className="flex items-center cursor-pointer"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
