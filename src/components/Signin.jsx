import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Home from './Home';
function Signin(){
const navigate = useNavigate();
const [username,setName] = useState('')
const [email,SetEmail] =useState('')
const [password,setPassword] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post('http://localhost:8000/api/v1/users/register', {
    username,
    email,
    password
  })
  .then(result => {
    console.log(result);
    // Assuming the registration was successful, navigate to the home page
     navigate('/Home')
    // navigate(/Home); // Update '/home' with the path to your home page
  })
  .catch(err => console.log(err));
};


return(<div className='bg-black'>
  <div className="bg-slate-700 flex flex-col items-center justify-center min-h-screen">
  <form className="bg-teal-400 shadow-md rounded px-4 pt-16 h-96 w-64" onSubmit={handleSubmit}>
    <input
      className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      name=""
      id=""
      placeholder="Please enter your name"
      onChange={(e) => setName(e.target.value)}
    />

    <input
      className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      name=""
      id=""
      placeholder="Enter valid emailId"
      onChange={(e) => SetEmail(e.target.value)}
    />

    <input
      className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-amber-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      name=""
      id=""
      placeholder="Enter Password"
      onChange={(e) => setPassword(e.target.value)}
    />
    {/* <button className="rounded-xl px-2 py-1 text-red-100 bg-black">LOGIN</button> */}
    {/* The navigateToLogin function and related button are commented out */}
    <button type = "submit" className="rounded-xl px-2 py-1 text-red-100 bg-black ml-">SIGNUP</button>
    {/* <p className='flex flex-row'> Already have an account</p> */}
    {/* <Link to=  "/login" className='ml-2 '>Already have an account</Link> */}
  </form>

</div>

</div>
);


}
export default Signin