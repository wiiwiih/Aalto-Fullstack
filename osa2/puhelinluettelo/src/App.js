import React, { useState } from 'react'
import PhonebookTable from './components/PhonebookTable'

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

    if (persons.some((person) => (person.name === newName))) {
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
      <div>
      filter names: <input value={filterText}
                     onChange={HandleFilterChange} />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
                       onChange={HandleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
                         onChange={HandleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PhonebookTable persons={persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))} />
    </div>
  )

}

export default App