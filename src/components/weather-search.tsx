"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WeatherSearchProps {
  city: string
  setCity: (city: string) => void
  onSearch: (city: string) => void
}

export default function WeatherSearch({ city, setCity, onSearch }: WeatherSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(city)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Enter a city name
          </label>
          <Input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. London"
            className="w-full"
          />
        </div>
        <div className="md:self-end">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
          >
            <Search className="mr-2 h-4 w-4" />
            Get Weather
          </Button>
        </div>
      </div>
    </form>
  )
}
