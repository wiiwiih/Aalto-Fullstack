import React from 'react'

const CountryList = ({countries}) => (
  countries.map(country => <div key={country.alpha2Code}>{country.name}</div>)
)

export default CountryList