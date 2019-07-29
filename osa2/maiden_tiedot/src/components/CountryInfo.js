import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CountryInfo = ({country}) => {
  const [ capitalWeather, setCapitalWeather ] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=0e4c2195d5aa2e6e94f1f4b688c9c2a6`)
      .then(response => {
        setCapitalWeather(response.data)
      })
  }, [country])
  
  return (
    <>
      <h1>{country.name}</h1>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>

      <h2>Languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>

      <img src={country.flag} alt="Flag" height="100" ></img>

      <h2>Weather in {country.capital}</h2>
      <div>
        <strong>Temperature: </strong>
        {capitalWeather.main ? Math.round((capitalWeather.main.temp - 273.15) * 10) / 10 : ''} Celsius
      </div>
      <div>
        <img src={capitalWeather.weather ? `http://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}@2x.png` : ''} alt="Weather icon"></img>
      </div>
      <div>
        <strong>Wind: </strong>
        {capitalWeather.wind ? capitalWeather.wind.speed : ''} kph
      </div>
    </>
  )
}

export default CountryInfo