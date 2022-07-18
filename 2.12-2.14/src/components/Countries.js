import Showdets from "./Showdets.js"
import Showdetsusr from "./Showdetsusr.js";
import Buttondets from "./Buttondets.js";

const Countries = ({countriestoshow, setCountriesToShow}) =>{

    if (countriestoshow.length <=10 && countriestoshow.length >= 2){
        return countriestoshow.map((country) => (
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={() => setCountriesToShow([country])}>show</button>
            </div>
          ));
    }
    if (countriestoshow.length === 1){
        const country = countriestoshow[0]
        return(
            <div>
                {Showdets(country)}
            </div>
        )
    }
    else{
        return(
            <div>Too many results</div>
        )
    }
}

export default Countries