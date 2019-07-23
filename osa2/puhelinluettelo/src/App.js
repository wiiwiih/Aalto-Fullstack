import React, { useState } from 'react'
import PhonebookTable from './components/PhonebookTable'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 'Arto Hellas'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  const HandleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const HandleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const HandleFilterChange = (event) => {
    setFilterText(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some((person) => (person.name.toLowerCase() === newName.toLowerCase()))) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: newName
      }

      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={filterText} onChange={HandleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm name={newName} onNameChange={HandleNameChange} number={newNumber} onNumberChange={HandleNumberChange} onSubmit={addPerson} />
      <h2>Numbers</h2>
      <PhonebookTable persons={persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))} />
    </div>
  )

}

export default App