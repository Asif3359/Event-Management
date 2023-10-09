import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from '@material-ui/core/Modal'

const UpdateInfo = () => {
    const [open, setOpen] = useState(false);
    const { profile } = useContext(AuthContext);

    const handleOpen = (dam) => {
        setOpen(dam);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        const Name = e.target.name.value
        const Photo = e.target.photo.value;
        console.log(Name, Photo);
        profile(Name, Photo)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode);
            })
    }
    const handleToast = () => {
        toast.success('Your Profile is update Please Refresh', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div>
            <div>
                <button onClick={() => handleOpen(!open)} className='btn btn-sm' type="button">
                    Update Info
                </button>
                {
                    open
                    &&
                    <div className={`bg-gray-100  rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto h-fit  ${open ? "block" : "hidden"} mt-4`}>

                        <form onSubmit={handleUpdate} className='p-5 space-y-4'>
                            <div className=''>
                                <h1 className='text-2xl font-bold'>Update Your Information</h1>
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="name">Display Name</label>
                                <input type="text" name='name' placeholder='Your Name' id='name' className=' border-2 rounded-lg px-1 py-2 w-full' />
                            </div>
                            <div className='space-y-2'>
                                <label htmlFor="photo">Display Name</label>
                                <input type="url" name='photo' placeholder='Your Photo url' id='Photo' className=' border-2 rounded-lg px-1 py-2 w-full' />
                            </div>
                            <div>
                                <input onClick={handleToast} className='btn btn-sm btn-primary' type="submit" value="Submit" />
                            </div>
                        </form>
                        <ToastContainer/>
                    </div>
                }
            </div>
        </div>
    );
};

export default UpdateInfo;