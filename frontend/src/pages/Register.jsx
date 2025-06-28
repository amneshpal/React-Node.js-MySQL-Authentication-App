import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  })
  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: [e.target.value] })
  // }
const navigate = useNavigate()

  const handleChanges = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};
  const handleSubmit = async (e)=>{
   e.preventDefault()
   try{
  const response = await axios.post('http://localhost:3000/auth/register', values)
  // console.log(response)
  if(response.status ===201){
    navigate('/login')
  }

   }catch(err){
    console.log(err)
   }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='username' onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email' onChange={handleChanges}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='password' onChange={handleChanges}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link to="/login" className="text-blue-600 hover:underline font-medium">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
