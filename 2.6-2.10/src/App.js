import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) =>{
    const Type = persons.find(person => person.name === newName)
    if (typeof(Type) === typeof(persons)) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
    }
    else{
    event.preventDefault()
    const PersonObject = {
      name: newName
    }
    setPersons(persons.concat(PersonObject))
    setNewName("")
  }
  }

  const handlePersonChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <p>name:</p>
      <form onSubmit={addPerson}>
        <input value={newName} onChange={handlePersonChange}/>
        <button type="submit">add</button>
      </form>  
      <h2>Numbers</h2>
      <p>{persons.map(person => <li key={person.name}>{person.name}</li>)}</p>
    </div>
  )
}

export default App