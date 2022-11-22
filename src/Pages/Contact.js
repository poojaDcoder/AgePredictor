import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.css'

export default class Contact extends Component {
  render() {
    <></>
    return (
     <Form action="">
        <br/>
        <div>
        <h1>Contact Info</h1>
      </div>
      <br/>

        <div>
          <label htmlFor="Username"> Fullname :  </label>
          <input typeof='text' name='Username' placeholder='Enter your full name' id='username' ></input>
        </div>
        <br/>

        <div>
          <label htmlFor="Email">Email Id : </label>
          <input typeof='text' name='Email' placeholder='Enter your Email id' id='email' ></input>
        </div>
        <br/>

        <div>
          <label htmlFor="Password">Password : </label>
          <input typeof='text' name='Password' placeholder='Enter your Password' id='password' ></input>
        </div>
        <br/>

        <div>
          <label htmlFor="Confirmpassword">Confirm password : </label>
          <input typeof='text' name='Confirmpassword' placeholder='Confirm your password' id='Confirmpassword' ></input>
        </div>
        <br/>

        <div>
          <label>State : </label>
          <select id='state'>
                        <option disabled selected value="--">Select Your State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Tripura">Tripura</option>
                        <option value="TamilNadu">TamilNadu</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Manipur">Manipur</option>
            </select>
                  
        </div>
        <br/>
        

        <div>
          <label htmlFor="City">City : </label>
          <input typeof='text' name='City' placeholder='Enter your city' id='city' ></input>
        </div>
        <br/>

        <div>
          <label htmlFor="Pincode">Pincode : </label>
          <input typeof='text' name='Pincode' placeholder='Enter your Pincode' id='pincode' ></input>
        </div>
        <br/>

        <div>
          <label htmlFor="Query">Any Query??<br/> Type Here : </label>
          <input typeof='text' name='Query' placeholder='Type Here' id='query' ></input>
        </div>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
      
    );
  }
  }
    