const cityForm = document.querySelector('[data-js="change-location"]')
const citynameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
    .querySelector('[data-js="city-temperature"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()
    
    const inputValue = event.target.city.value
    const [ { Key , LocalizedName }] = await getCityData(inputValue)
    const [ { WeatherText, Temperature}] = await getCityWeather(Key)

    citynameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = = WeatherText
    cityTemperatureContainer.textContent = te
    

    console.log( Key, LocalizedName, WeatherText , Temperature.Metric.Value )

    cityForm.reset()

})