import { useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountires] = useState([])
  const [searchstring, setSearchString] = useState('')
  const [countriestoshow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountires(response.data)
      })
  }, [])

  const Search = (event) =>{
    event.preventDefault()
    setSearchString(event.target.value)
    setCountriesToShow(countries.filter(country => country.name.common.includes(searchstring)))

  }

  return (
    <div>
      <div>find countries: <input value = {searchstring} onChange = {Search}/></div>
      <Countries countriestoshow={countriestoshow} setCountriesToShow={setCountriesToShow}/>
    </div>
  )
}

export default App