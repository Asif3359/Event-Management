import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import Service from '../Service/Service';

const Services = ({services}) => {
    // console.log(services)
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2  gap-5'>
            {
                services.map(service =>  <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;