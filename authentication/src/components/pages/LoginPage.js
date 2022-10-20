import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import bcrypt from 'bcryptjs'
function LoginPage() {
  const salt = bcrypt.genSaltSync(10);
  const [userLogin, setUser] = useState({});
  const [cookies, setCookie] = useCookies(['token']);
  const URL = 'https://learning.staging.aasatech.asia/api/v1/auth/session';
  const onHandleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev)=>{
      return {...prev, [name]: value};
    })
  }
  const onLogin= async ()=>{
    let result = await fetch(URL,{
      method: 'POST',
      body: JSON.stringify(userLogin),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    result = await result.json();
    if (result.success === false){
      alert(result.message[0])
    }else{
      let securedToken = bcrypt.hashSync(result.token, salt);
      setCookie("token",securedToken);
      alert("Hello: " + cookies.token);
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="shadow-green-900/80 rounded bg-gradient-to-b from-green-200/80 to-blue-500/20 shadow p-7 bg-white rounded-b w-1/3 m-auto">
        <h2 className="text-cyan-900 text-center mb-5 capitalize text-3xl font-bold">Login</h2>
        <div className="w-full">
          <div className="w-full mb-1">
            <label>Email or Username</label>
            <input
              name="login"
              type="text"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Email or Username . . ."
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
              onClick={onLogin}
              className="h-9 rounded w-1/4 text-stone-100 font-bold cursor-pointer hover:bg-blue-200 bg-gradient-to-l from-violet-900/60 to-rose-500/50">
              Login
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <h3 className="text-blue-500">Don't have account?</h3>
          <Link to={`/register`}
            className="ml-2 text-blue-500 font-bold underline cursor-pointer">
            Regester
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage;