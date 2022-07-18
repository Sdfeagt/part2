import axios from "axios";
import { useEffect, useState } from "react";

const Showdets = (country) =>{
    const api_key = process.env.REACT_APP_API_KEY
    const [weatherdb, setweatherdb] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`
            )
            .then(response => {
                setweatherdb(response.data)
            })
        }, [])
        console.log(weatherdb);

    const langs = Object.values(country.languages)
    return(
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <h1>Languages</h1>
            <ul>
                {langs.map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src= {country.flags.png} alt="Flag"/>
            <h1>Weather in {country.capital}</h1>
            <p>Temperature {weatherdb.main.temp} Celcius</p>
            <img>
            alt="weather"
            src={`http://openweathermap.org/img/wn/${weatherdb.weather[0].icon}@2x.png`}
            </img>
            <p>Wind {weatherdb.wind.speed} m/s.</p>
        </div>
    )
}

export default Showdets