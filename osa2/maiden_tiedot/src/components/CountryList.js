import React from 'react'
import CountryInfo from './CountryInfo.js'

const CountryList = ({countries, showButtonClicked, onClick, selectedCountry}) => {
  if (showButtonClicked) {
    return (<CountryInfo country={selectedCountry} />)
  } 

  return (
    countries.map(country => 
        <div key={country.alpha2Code}>
            {country.name}
            <button onClick={() => onClick(country)} >show</button>
        </div>)
  )
}
  

export default CountryList