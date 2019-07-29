import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FilterForm from './components/FilterForm.js'
import SearchResult from './components/SearchResult.js'

function App() {
  const [ filterText, setFilterText ] = useState('')
  const [ countries, setCountries ] = useState([])
  const [ showButtonClicked, SetShowButtonClicked ] = useState(false);
  const [ selectedCountry, setSelectedCountry ] = useState({});

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const HandleFilterChange = (event) => {
    setFilterText(event.target.value)
    SetShowButtonClicked(false);
    setSelectedCountry({})
  }

  const onShowClick = (country) => { 
    SetShowButtonClicked(true)
    setSelectedCountry(country) 
  }

  return (
    <div>
      <FilterForm value={filterText} onChange={HandleFilterChange} />
      <SearchResult countries={countries.filter(country => country.name.toLowerCase().includes(filterText.toLowerCase()))} 
                    showButtonClicked={showButtonClicked}
                    onClick={onShowClick}
                    selectedCountry={selectedCountry} />
    </div>
  )
}

export default App;
