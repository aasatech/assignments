import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function UserHome () {
    const [cookies, removeCookie] = useCookies();
    const user = cookies.user;
    const {id, name, email, phone, username} = user;
    const navigate = useNavigate();

    const onLogout = () => {
        removeCookie('user');
        if(removeCookie){
            navigate('/login');
        }
    };

    return(
        <div className="mt-48">
            <button onClick={onLogout} className="bg-teal-300 rounded p-2">Logout</button>
            <h1 className="capitalize flex justify-center mb-5 text-2xl font-bold">Welcome  {name}</h1>
            <div className="bg-gray-300 w-1/2 m-auto p-3 rounded">
                <h3>User ID : {id}</h3>
                <h3>Username : {username}</h3>
                <h3>Email : {email}</h3>
                <h3>Phone : {phone}</h3>
            </div>
        </div>
    )

}

export default UserHome;