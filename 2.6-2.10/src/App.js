import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '123456789'}
  ]) 
  const [newName, setNewName] = useState('')
  const [phoneNo, setNewphone] = useState('')
  const [SearchString, setNewString] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) =>{
    const Type = persons.find(person => person.name === newName)
    if (typeof(Type) === typeof(persons)) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
    }
    else{
    event.preventDefault()
    const PersonObject = {
      name: newName, phone: phoneNo
    }
    setPersons(persons.concat(PersonObject))
    setNewName("")
    setNewphone("")
  }
  }

  const handlePersonChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) =>{
    console.log(event.target.value);
    setNewphone(event.target.value)
  }

  const Search = (event) =>{
    event.preventDefault()
    setShowAll(false)
    console.log(event.target.value);
    setNewString(event.target.value)
    }

  const PeopleToShow = showAll ? persons : persons.filter(person => person.name.includes(SearchString))



  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter shown with: <input value={SearchString} onChange={Search}></input></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handlePersonChange}/></div>
      <div>number: <input value ={phoneNo} onChange={handlePhoneChange} /></div>
        <button type="submit">add</button>
      </form>  
      <h2>Numbers</h2>
      <p>{PeopleToShow.map(person => <li key={person.name}> {person.name} {person.phone}</li>)}</p>
    </div>
  )
}

export default App