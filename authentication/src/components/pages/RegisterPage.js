import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function RegisterPage() {
  const userForm = {
    name: '',
    userName: '',
    email: '',
    phone: '',
    password: ''
  }
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(userForm);
  const URL = 'https://learning.staging.aasatech.asia/api/v1/auth';
  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((prev)=>{
      return {...prev, [name]: value};
    })
  }
  const onRegister = async () => {
    navigate(`/login`);
    let result = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
  };
  
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="shadow-green-900/80 rounded bg-gradient-to-b from-green-200/80 to-blue-500/20 shadow p-7 bg-white rounded-b w-1/3 m-auto">
        <h2 className="text-cyan-900 text-center mb-5 capitalize text-3xl font-bold">Register</h2>
        <div className="w-full">
          <div className="w-full mb-1">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Name . . ."
              onChange={onHandleChange}
            />
          </div>
          <div className="w-full mt-3">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Username . . ."
              onChange={onHandleChange}
            />
          </div>
          <div className="w-full mt-3">
            <label>Phone</label>
            <input
              name="phone"
              type="text"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Phone . . ."
            />
          </div>
          <div className="w-full mt-3">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Email . . ."
              onChange={onHandleChange}
            />
          </div>
          <div className="w-full mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Password . . ."
              onChange={onHandleChange}
            />
          </div>
          <div className="w-full flex justify-end mt-5">
            <button
              onClick={onRegister}
              className="h-9 rounded w-1/4 text-stone-100 font-bold cursor-pointer hover:bg-blue-200 bg-gradient-to-l from-violet-900/60 to-rose-500/50">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RegisterPage;

