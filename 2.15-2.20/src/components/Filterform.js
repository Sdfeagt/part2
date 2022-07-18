const Filterform = ({SearchString, Search}) =>{
    return(
        <div>
        <form>
        <div>filter shown with: <input value={SearchString} onChange={Search}></input></div>
      </form>
      </div>
    )
}

export default Filterform