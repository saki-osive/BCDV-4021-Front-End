import React from "react";

const UserProfile = ({ user }) => (

    <div>
        {
            user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>No user information available</p>
            )
        }
    </div>

);


export default UserProfile;