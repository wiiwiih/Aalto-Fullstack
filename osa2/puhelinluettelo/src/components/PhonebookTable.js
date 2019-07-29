import React from 'react'

const PhonebookTable = ({persons, onDelete}) => (
  <table>
      <tbody>
          {persons.map(person => <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.number}</td>
                                    <td><button onClick={() => onDelete(person)}>Delete</button></td>
                                 </tr>)}
      </tbody>
  </table>
)

export default PhonebookTable