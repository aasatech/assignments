import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="shadow-green-900/80 rounded bg-gradient-to-b from-green-200/80 to-blue-500/20 shadow p-7 bg-white rounded-b w-1/3 m-auto">
        <h2 className="text-cyan-900 text-center mb-5 capitalize text-3xl font-bold">Login</h2>
        <div className="w-full">
          <div className="w-full mb-1">
            <label>Email or Username</label>
            <input
              name="email-username"
              type="text"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Email or Username . . ."
            />
          </div>
          <div className="w-full mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="shadow appearance-none border  rounded w-full px-2 p-2 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              placeholder="Password . . ."
            />
          </div>
          <div className="w-full flex justify-end mt-5">
            <button
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