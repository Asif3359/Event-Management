import React, { useContext } from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Services from '../../Components/Services/Services';
import PopularEvents from '../../Components/PopularEvents/PopEvents';
import Statistics from '../../Components/Statistics/Statistics';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className='mx-1 lg:mx-4 space-y-10'>

            <div>
                <Banner></Banner>
            </div>
            <div className='space-y-10'>
                <div className='w-3/4 mx-auto space-y-3'>
                    <h1 className='text-center text-4xl font-bold'>Our Services</h1>
                    <p className='text-center'>At Corporate Nexus Events, we understand that every event is unique, and our services are designed to cater to a wide range of needs and objectives. Whether you're planning a large-scale conference, a product launch, a gala dinner, or any other corporate gathering, we have the expertise and creativity to make it a resounding success.</p>
                </div>
                <Services services={services}></Services>
            </div>
            <div>
                <PopularEvents></PopularEvents>
            </div>
            <div >
                <AboutUs></AboutUs>
            </div>
            <div>
                <Statistics></Statistics>
            </div>

        </div>
    );
};

export default Home;