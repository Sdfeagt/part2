const Personstoshow = ({personstoshow}) =>{
    return(
        <ul>
        {personstoshow.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    )
}

export default Personstoshow