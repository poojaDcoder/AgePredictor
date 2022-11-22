import React from 'react';
import Axios from"axios";
import {useState } from 'react';
import"./Home.css";

const Home = () => {
  const [name,setName]=useState("");
  const [predictAge,setPredictAge]=useState();

const fetchData =() =>{
  Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    setPredictAge(res.data.age);
    

  })
}
return (
    <div className='App'>
      <h1>Welcome <br></br> To Your AGE prediction App!!!!!!!!!!!</h1>
      <br/>
      <input type="text" placeholder='Type your Name' onChange={(event)=>{setName(event.target.value)}}/>
      <button id="age"onClick={fetchData}>Predict Age</button>
      <br></br>
      <br></br>
      <h4>Your age Prediction is : {predictAge} <h4>(Yrs.)</h4></h4>

    </div>
  )
}

export default Home;