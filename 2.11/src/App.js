import { useState, useEffect} from 'react'
import Personstoshow from './components/Peopletoshow.js'
import Filterform from './components/Filterform.js'
import Addform from './components/Addform.js'
import axios from 'axios'

//Note: due to the many new topics covered, I've decided to copy the previous phonebook exercise and leave the original as is.

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNo, setNewphone] = useState('')
  const [SearchString, setNewString] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data);
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) =>{
    const Type = persons.find(person => person.name === newName)
    if (typeof(Type) === typeof(persons)) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
    }
    else{
    event.preventDefault()
    const PersonObject = {
      name: newName, number: phoneNo
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