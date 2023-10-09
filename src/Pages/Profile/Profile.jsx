import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div className='p-3'>
            <div className='grid grid-cols-1 gap-2'>
                <div>
                    <img className='w-96' src={user.photoURL} alt="" />
                </div>
                <div>
                    <h1><span className='font-bold'> Name :</span>{user.displayName}</h1>
                    <h1><span className='font-bold'> Email :</span>{user.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default Profile;