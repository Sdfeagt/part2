const Personstoshow = ({personstoshow, Todelete}) =>{
    return(
        <ul>
        {personstoshow.map(person => <div key={person.id}>{person.name} {person.number} 
        <button onClick={() => Todelete(person)}>delete</button></div>)}
      </ul>
    )
}

export default Personstoshow