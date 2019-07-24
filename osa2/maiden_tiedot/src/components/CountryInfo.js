import React from 'react'

const CountryInfo = ({country}) => (
  <>
    <h1>{country.name}</h1>
    <div>Capital: {country.capital}</div>
    <div>Population: {country.population}</div>

    <h2>Languages</h2>
    <ul>
      {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
    </ul>

    <img src={country.flag} height="100" ></img>
    
  </>
)

export default CountryInfo