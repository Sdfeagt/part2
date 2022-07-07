import { useState } from 'react'
//import PeopleToShowFilter from './components/Filter'
import Personstoshow from './components/Peopletoshow.js'
import Filterform from './components/Filterform.js'
import Addform from './components/Addform.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
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

  const PeopleToshow = showAll ? persons : persons.filter(person => person.name.includes(SearchString))



  return (
    <div>
      <h2>Phonebook</h2>
      <Filterform SearchString={SearchString} Search={Search}/>
      <h2>add a new</h2>
      <Addform addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} phoneNo={phoneNo} handlePhoneChange={handlePhoneChange}/>  
      <h2>Numbers</h2>
      <Personstoshow personstoshow={PeopleToshow}/>
    </div>
  )
}

export default App