import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function UserNav() {
  const [isMore, setMore] = useState(false);
  const [cookies, removeCookie] = useCookies();
  const [token, removeToken] = useCookies(['token']);
  const user = cookies.user;
  const {username} = user;
  const navigate = useNavigate();

  const onLogout = () => {
      removeCookie('user');
      removeToken(['token']);
      if(removeCookie){
          navigate('/');
      }
  };
  const onClickMore = ()=>{
    setMore(!isMore);
  }
  return (
    <div className="header fixed top-0 left-0 right-0 shadow-md p-5 bg-white z-8">
      <div className='flex justify-end'>
        <ul className='flex justify-center items-center text-sky-500'>
          <li className='mr-5'>Welcome</li>
          <li className='mr-5'>{username}</li>
          <li className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='w-4 fill-gray-400 cursor-pointer' onClick={onClickMore}><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
            {
              isMore && (
                <div className='absolute right-0 bg-sky-500 border shadow-md rounded opacity-90'>
                  <ul className='text-white'>
                    <Link>
                      <li className='hover:bg-sky-300 px-4'>Profile</li>
                    </Link>
                    <Link to={'/'}>
                      <li className='hover:bg-sky-300 px-4 cursor:pointer' onClick={onLogout}>Logout</li>
                    </Link>
                  </ul>
                </div>
              )
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserNav;