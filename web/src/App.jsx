import React, { useState } from "react";
import axios from "axios"

const App = () => {
  const [city, setCity] = useState("");
  const handleSubmit= async(e)=>{
    e.preventDefault()
    let response =  await axios.get(`http://localhost:3000/weather/${city}`)
     
  }

  return (
    <div>
      <h1>getting apis</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">get data</button>
      </form>
    </div>
  );
};

export default App;
