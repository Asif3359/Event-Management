import React, { useContext } from 'react';
import Service from '../Service/Service';
import { AuthContext } from '../../AuthProviders/AuthProvider';
 import service1 from "../../assets/banner-1.jpeg"
 import service2 from "../../assets/banner-2.jpeg"
 import service3 from "../../assets/banner-3.jpeg"
 import service4 from "../../assets/banner-4.jpg"

const Services = () => {

    const { services } = useContext(AuthContext)
    const handleServiceEmail = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='space-y-10 '>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10  py-10 h-fit rounded-lg'>
                <div className='flex-1 h-60 lg:h-full grid grid-cols-2 p-y-10 rounded-lg w-full lg:w-4/5 '>
                    <img className='w-full  h-24 lg:h-52' src={service1} alt="" />
                    <img className='w-full  h-24 lg:h-52' src={service2} alt="" />
                    <img className='w-full  h-24 lg:h-52' src={service3} alt="" />
                    <img className='w-full   h-24 lg:h-52' src={service4} alt="" />
                </div>
                <div className= ' flex-1 lg:w-1/2 mx-auto space-y-10 '>
                    <h1 className='text-3xl font-bold'>Our Services</h1>
                    <p>At Itachi, we understand that every event is unique and requires a tailored approach to ensure its success. With our years of experience and dedication to excellence, we offer a wide range of event management services designed to make your special occasions truly memorable. Whether you're planning a corporate conference, a wedding, a product launch, or a social gathering, we've got you covered.</p>
                    <div>
                        <button className='btn btn-sm btn-primary'>Contact us</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div className='bg-blue-200 py-10'>
                <div className='space-y-3 px-2 lg:w-1/2 mx-auto'>
                    <h1 className='text-3xl text-center mx-auto font-bold'>Get more updates...</h1>
                    <p className='text-center'>Do you want to get notified when a new component is added to Flowbite? Sign up for our newsletter and you will be among the first to find out about new features, components, versions, and tools.</p>
                </div>
                <div className=' py-10 px-5'>
                    <form onSubmit={handleServiceEmail} className='flex justify-center items-center lg:w-2/4 mx-auto '>
                        <input type="email" name='email' placeholder='Email' className='py-1 px-2 w-full border-2' />
                        <button type='submit' name='submit' className= 'btn btn-sm  btn-primary border-2 rounded-none '>submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Services;