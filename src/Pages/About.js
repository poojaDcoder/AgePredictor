import React from 'react'
import'./About.css';
import img from './image.png';

const About = () => {
  return (
    <div id="first">
      <h1>About Us :</h1>
      <br/>
      <h2 > AgePredictor is a Name detecting age estimation application.
        <br/>
         It uses world's best Name algorithms to find the age from the name of the face.
         <br/>
          Note : It may vary person to person ,name to name in different conditions.</h2>

        <br></br>
        <br></br>
        <div id='image'>
        <img src={img} alt='logo'/>

        </div>

          

       
    </div>
    
  )
}

export default About