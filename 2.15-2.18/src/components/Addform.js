const Addform = ({addPerson, newName, handlePersonChange, phoneNo, handlePhoneChange}) =>{
    console.log(phoneNo);
    return(
        <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handlePersonChange}/></div>
        <div>number: <input value ={phoneNo} onChange={handlePhoneChange} /></div>
          <button type="submit">add</button>
        </form>
    )
}
export default Addform