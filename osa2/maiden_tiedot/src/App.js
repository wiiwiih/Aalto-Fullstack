import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FilterForm from './components/FilterForm.js'
import SearchResult from './components/SearchResult.js'

function App() {
  const [ filterText, setFilterText ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const HandleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <FilterForm value={filterText} onChange={HandleFilterChange} />
      <SearchResult countries={countries.filter(country => country.name.toLowerCase().includes(filterText.toLowerCase()))} />
    </div>
  )
}

export default App;
