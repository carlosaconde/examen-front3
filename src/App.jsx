// import { useState } from 'react'
import {  useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
 const [lastName, setLastName] = useState('')
 const [name, setName] = useState('')
 const [preferredCar, setPreferredCar] = useState('')

  const handleChangeName = (e) => {
      
    setName(e.target.value)
  };
  const handleChangeLastName = (e) => {
      
    setLastName(e.target.value)
  };
  const handleChangePreferredCar = (e) => {
      
    setPreferredCar(e.target.value)
  };

  const [data, setData] = useState({})

  const onSubmit = (e) => {
    e.preventDefault();
    if(name)
    setData({name,lastName,preferredCar})

  };

  return (
    <>
      
      
        <form action="submit">
        <div style={{
        display:'flex',
        flexDirection:'column'
      }}>
          <label > Nombre </label>
          <input 
          type="text" 
          value={name} 
          onChange={handleChangeName} 
          />
          
          <label > Apellido </label>
          <input 
          type="text" 
          value={lastName}
          onChange={handleChangeLastName}/>
          
          <label > Marca de Auto </label>
          <input 
          type="text" 
          value={preferredCar}
          onChange={handleChangePreferredCar}
          />
          
          
          <button onClick={onSubmit}> enviar </button>
          </div>
        </form>
    
      { data && <Card data={data}/> }
    </>
  );
}

export default App;
