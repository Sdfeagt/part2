const Personstoshow = ({personstoshow}) =>{
    return(
        <ul>
        {personstoshow.map(person => <li key={person.name}>{person.name} {person.phone}</li>)}
      </ul>
    )
}

export default Personstoshow