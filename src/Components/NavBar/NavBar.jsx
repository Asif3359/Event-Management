import { Button } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import swal from 'sweetalert';

const NavBar = () => {
    const [logOutError, setLogOutError] = useState(null);
    const [logOutSuccess, setLogOutSuccess] = useState(null);
    const { services, user, logOut } = useContext(AuthContext);

    const handleSingOut = () => {

        swal({
            title: "Are you sure?",
            text: "You want to LogOut now!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("LogOut Successfully", {
                        icon: "success",
                    });
                    logOut()
                        .then(result => {
                            setLogOutSuccess("User Log Out Successfully")
                        })
                        .catch(error => {
                            setLogOutError(error.message)
                        })
                }
                else {
                    swal("You are still logged in");
                }
            });

    }
    const links = <>
        <li><NavLink to="/">Home</NavLink ></li>
        <li><NavLink to="/service">Service</NavLink ></li>
        <li>
            <details >
                <summary>Events</summary>
                <ul className='w-56 z-50 right-1 m-0 border-l-0 flex justify-start items-center flex-wrap gap-0 '>

                    {
                        // <NavLink to={`/event/${serviceID}`}>Profile</NavLink >
                        services.map(service => <li className='w-full' key={service.id} service={service}>
                            <NavLink to={`/events/${service.id}`}>{service.name}</NavLink >
                        </li>
                        )

                    }
                </ul>
            </details>
        </li>
        {
            user
            &&
            <li className='hidden lg:block'><NavLink className="rounded-full p-0 m-0 btn btn-circle btn-sm" to="/profile"><button><img className='rounded-full' src={user?.photoURL} alt="" /></button></NavLink ></li>
        }
        {
            user ? <li><Link onClick={handleSingOut}>logout</Link></li> : <li><NavLink to="/login">login</NavLink ></li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <li className='list-none'><NavLink to="/" className="font-bold text-xl lg:text-3xl"><span className='hidden md:inline-block justify-start items-center'>Corporate</span> <span className='text-blue-500'>Nexus</span> Events</NavLink></li>
                </div>
                <div className="flex-o">
                    <ul className="menu hidden md:flex items-center justify-center  menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                    <ul className="menu flex md:hidden items-center justify-center menu-horizontal px-1">

                        <li><NavLink className="rounded-full p-0 m-0 btn btn-circle btn-sm" to="/profile"><button><img className='rounded-full' src={user?.photoURL} alt="" /></button></NavLink ></li>
                        <li>
                            <details>
                                <summary>
                                    Menu
                                </summary>
                                <ul className="p-2 z-50  right-0">
                                    {
                                        links
                                    }
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;