import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { FaLocationPin } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Events = () => {
    const services = useLoaderData();
    const { id } = useParams();

    const [service, setUseService] = useState({});

    useEffect(() => {
        const useService = services.find(service => service.id == id);
        setUseService(useService);

    }, [id]);
    const handleBuy = () => {
        toast.error(' No functionality has been added yet.!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='p-3'>
            <div className='relative group z-10 overflow-hidden'>
                <div className="relative group z-10 overflow-hidden">
                    <img className=" h-60 lg:h-[80vh] w-full" src={service.img_url} alt="" />
                    <div className="overflow-hidden w-full absolute bottom-0 bg-black opacity-0 group-hover:opacity-70 flex justify-start items-center  transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
                        <button onClick={handleBuy} className="btn my-10 mx-3 btn-primary group-hover:opacity-100">Buy Now</button>
                    </div>
                </div>
                <div className='p-3 space-y-4'>
                    <h1 className='text-2xl font-bold'>{service.name}</h1>
                    <p>{service.details}</p>
                    <div className='flex justify-start items-center gap-2'>
                        <p><FaLocationPin></FaLocationPin></p>
                        <p> {service.location}</p>
                    </div>
                    <div className='space-y-3'>
                        <p><span className='font-bold'>Price : </span> ${service.amount}</p>
                        <p><span className='font-bold'>Event Manager : </span>{service.manager_name}</p>
                        <p><span className='font-bold'>Mobile No : </span>{service.mobile}</p>
                        <p><span className='font-bold'> Email : </span>{service.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;