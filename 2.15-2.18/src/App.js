import { useState, useEffect} from 'react'
import Personstoshow from './components/Peopletoshow.js'
import Filterform from './components/Filterform.js'
import Addform from './components/Addform.js'
import personservices from './services/personservices.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNo, setNewphone] = useState('')
  const [SearchString, setNewString] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    personservices
    .getAll()
      .then(personsget => {
        setPersons(personsget)
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
    personservices
    .create(PersonObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    setNewName("")
    setNewphone("")
    })
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

  const DeletePerson = (Person) =>{
    console.log("In delete person frontend");
    personservices
    .remove(Person.id)
    .then(DbAfterDel =>{
      console.log("Deletion succesfull");
    })

  }

  const PeopleToshow = showAll ? persons : persons.filter(person => person.name.includes(SearchString))



  return (
    <div>
      <h2>Phonebook</h2>
      <Filterform SearchString={SearchString} Search={Search}/>
      <h2>add a new</h2>
      <Addform addPerson={addPerson} newName={newName} handlePersonChange={handlePersonChange} phoneNo={phoneNo} handlePhoneChange={handlePhoneChange}/>  
      <h2>Numbers</h2>
      <Personstoshow personstoshow={PeopleToshow} Todelete = {DeletePerson}/>
    </div>
  )
}

export default App