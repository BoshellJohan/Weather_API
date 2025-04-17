const API_key = 'c69dd6502fbbda5ca098c7aa6bb09795'

export async function getCityWeather(city: string) {
  // In a real implementation, you would call your weather API here
  // For now, we'll simulate the API call with a mock response
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
    }

}

export async function getInfoEach3Hours(city: string) {
  // In a real implementation, you would call your forecast API here
  // For now, we'll simulate the API call with a mock response

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`

    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(e) {
        console.log(e)
  }

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       list: [
  //         {
  //           dt_txt: "2023-04-17 12:00:00",
  //           main: {
  //             temp: 23.5,
  //             humidity: 60,
  //           },
  //           weather: [
  //             {
  //               main: "Clear",
  //               description: "clear sky",
  //             },
  //           ],
  //         },
  //         {
  //           dt_txt: "2023-04-17 15:00:00",
  //           main: {
  //             temp: 25.2,
  //             humidity: 55,
  //           },
  //           weather: [
  //             {
  //               main: "Clouds",
  //               description: "few clouds",
  //             },
  //           ],
  //         },
  //         {
  //           dt_txt: "2023-04-17 18:00:00",
  //           main: {
  //             temp: 22.8,
  //             humidity: 65,
  //           },
  //           weather: [
  //             {
  //               main: "Rain",
  //               description: "light rain",
  //             },
  //           ],
  //         },
  //         {
  //           dt_txt: "2023-04-17 21:00:00",
  //           main: {
  //             temp: 19.5,
  //             humidity: 75,
  //           },
  //           weather: [
  //             {
  //               main: "Thunderstorm",
  //               description: "thunderstorm",
  //             },
  //           ],
  //         },
  //       ],
  //     })
  //   }, 500)
  // })
}
