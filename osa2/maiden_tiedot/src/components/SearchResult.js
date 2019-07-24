import React from 'react'
import CountryInfo from './CountryInfo.js'
import CountryList from './CountryList.js'

const SearchResult = ({countries}) => {
  if (countries.length > 10) {
      return (<p>Too many matches, specify another filter</p>)
  } else if (countries.length > 1) {
      return (<CountryList countries={countries} />)
  } else if (countries.length === 1) {
    return (<CountryInfo country={countries[0]} />)
} else {
      return (<p>No countries found with specified filter</p>)
  }
}

export default SearchResult