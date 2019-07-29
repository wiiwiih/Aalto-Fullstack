import React, { useState, useEffect } from 'react'
import phonebookService from './services/Phonebook'
import PhonebookTable from './components/PhonebookTable'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ notification, setNotification ] = useState(null)
  const [ error, setError ] = useState(null)

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
            
            setNotification(`${returnedPerson.name}'s number was changed`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          })
          .catch(error => {
            setPersons(persons.filter(p => p.id !== changedPerson.id))

            setError(`${changedPerson.name} has already been removed from the server`)
            setTimeout(() => {
              setError(null)
            }, 5000)
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

          setNotification(`${returnedPerson.name} was added`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
        })
      
    }
  }

  const deletePerson = (selectedPerson) => {
    if (window.confirm(`Delete ${selectedPerson.name}?`)) {
      phonebookService
        .remove(selectedPerson.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== selectedPerson.id))

          setNotification(`${selectedPerson.name} was deleted`)
            setTimeout(() => {
              setNotification(null)
            }, 3000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} isError={false} />
      <Notification message={error} isError={true} />
      <FilterForm value={filterText} onChange={HandleFilterChange} />
      <h2>Add new person</h2>
      <PersonForm name={newName} onNameChange={HandleNameChange} number={newNumber} onNumberChange={HandleNumberChange} onSubmit={addPerson} />
      <h2>Numbers</h2>
      <PhonebookTable persons={persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))} onDelete={deletePerson} />
    </div>
  )

}

export default App