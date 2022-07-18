import Showdets from "./Showdets.js"
import Showdetsusr from "./Showdetsusr.js"

const Buttondets = (country) => {

    return(
            <button onClick={() => Showdetsusr(country)}>show</button>
    )
}

export default Buttondets