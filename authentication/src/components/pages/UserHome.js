import React from "react";
import { useCookies } from "react-cookie";

function UserHome () {
    const [cookies, removeCookie] = useCookies();
    const user = cookies.user;
    const {id, name, email, phone, username} = user;
    
    return(
        <div className="mt-48">
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