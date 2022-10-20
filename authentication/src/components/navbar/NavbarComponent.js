import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className="header fixed top-0 left-0 right-0 shadow-md px-5 py-2 bg-white flex justify-between z-8">
      <ul>
        <Link to={'/home'}>
          <li>Home</li>
        </Link>
      </ul>
      <ul className="flex justify-center items-center">
        <Link to={'/login'}>
          <li className='mr-2'>Login</li>
        </Link>
        <Link to={'/register'}>
          <li className='ml-2'>Register</li>
        </Link>

      </ul>
    </div>
  )
}

export default Navigation;