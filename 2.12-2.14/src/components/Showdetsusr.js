const Showdetsusr = (country) =>{
    console.log("In showdetsusr, country");
    console.log(country.country);
    console.log("Langs");
    console.log(country.country.languages);
    const langs = Object.values(country.country.languages)
    return(
        <div>
            <h1>{country.country.name.common}</h1>
            <p>Capital {country.country.capital}</p>
            <p>Area {country.country.area}</p>
            <h1>Languages</h1>
            <ul>
                {langs.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src= {country.country.flags.png} alt="Flag"/>
            
        </div>
    )
}

export default Showdetsusr