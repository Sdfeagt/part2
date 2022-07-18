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
  const [Message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='completedoperation'>
        {message}
      </div>
    )
  }

  const Errormsg = ({error}) => {
    if (error == null){
      return null
    }
    return(
      <div className='error'>
        {error}
        </div>

    )
  }

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
      if(window.confirm(`${newName} is alredy in the phonebook. Do you want to change it's phone number?`)){
        setMessage(
          `Phone of ${Type.name} changed.`
        )
        const changedPhone = {...Type, number: phoneNo}
        personservices
        .updatephone(changedPhone)
        .then(returnedPerson =>{
          setPersons(persons.map(person => person.id !== changedPhone.id ? person : returnedPerson))
        })
      }
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
    setMessage(`${PersonObject.name} added to the phonebook!`)
  }
  }

  const handlePersonChange = (event) =>{
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) =>{
    setNewphone(event.target.value)
  }

  const Search = (event) =>{
    event.preventDefault()
    setShowAll(false)
    setNewString(event.target.value)
    }

  const DeletePerson = (Person) =>{
    if(window.confirm(`Do you want to delete ${Person.name}?`)){
    personservices
    .remove(Person.id)
    .then(() =>{
      setMessage("Deletion successful.")
    })
    .catch(() =>{
      setError(`${Person.name} has alredy been removed from the database!`)
      setPersons(persons.filter(p => p.id !== Person.id))
    }

    )
    window.location.reload();
  }
  }

  const PeopleToshow = showAll ? persons : persons.filter(person => person.name.includes(SearchString))



  return (
    <div>
      <Notification message={Message} />
      <Errormsg error={error}/>
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