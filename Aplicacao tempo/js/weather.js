const APIKey = 'ziH4lcMkCyZQyP6CT67kcA4AvDStIk5S'
const getCityUrl = cityName =>
 `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if(!response.ok){
            throw new Error ( 'Não foi possível obter os dados')
        }

        const [cityDate] = await response.json()
        return cityDate


    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}

const getCitWeather= async cityName => {
    try {
        const { Key } = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherUrl)

        if(!response.ok){
            throw new Error ( 'Não foi possível obter os dados')
        }

        const [cityWeahtherData] = await response.json()
            debugger
            return cityWeahtherData


    } catch ({name, message}) {
        alert(`${name}: ${message} `)
    }
}

getCityData('São paulo')
getCitWeather('São paulo')