import React, { useState, useEffect } from 'react'
import phonebookService from './services/Phonebook'
import PhonebookTable from './components/PhonebookTable'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = { ...person, number: newNumber}

        phonebookService
          .update(changedPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
          })
          .catch(error => {
            alert(`${changedPerson.name} was already deleted from the server`)
            setPersons(persons.filter(p => p.id !== changedPerson.id))
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      phonebookService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      
    }
  }

  const deletePerson = (selectedPerson) => {
    if (window.confirm(`Delete ${selectedPerson.name}?`)) {
      phonebookService
        .remove(selectedPerson.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== selectedPerson.id))
          alert(
            `${selectedPerson.name} was deleted`
          )
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm value={filterText} onChange={HandleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm name={newName} onNameChange={HandleNameChange} number={newNumber} onNumberChange={HandleNumberChange} onSubmit={addPerson} />
      <h2>Numbers</h2>
      <PhonebookTable persons={persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))} onDelete={deletePerson} />
    </div>
  )

}

export default App