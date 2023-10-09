import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProvider';

const Service = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { id, name, img_url, small_title, details, amount, dataAos } = service;
    return (
        <div data-aos={`${dataAos}`} data-aos-delay="250" className='bg-gray-100 rounded-lg'>
            <div className="flex flex-col lg:flex-row justify-between items-center rounded-lg border-2 gap-5 group hover:shadow-lg">
                <div className="flex-1 relative overflow-hidden">
                    <img className="h-60 w-full rounded-lg" src={service.img_url} alt="" />
                    <div className="overflow-hidden rounded-lg w-full absolute bottom-0 bg-black opacity-0 group-hover:opacity-70 flex justify-start items-center transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
                        <Link to={`/events/${id}`}>
                            <button className="btn my-5 mx-3 btn-primary group-hover:opacity-100">Buy Now</button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 gap-2 flex flex-col justify-between px-2 py-3">
                    <h2 className="card-title font-bold text-2xl">{small_title}</h2>
                    <h3 className="font-bold">{name}</h3>
                    <p>{details.slice(0, 100)}..</p>
                    <div className="flex justify-around items-center">
                        <p className="font-bold">${amount}</p>
                        <Link to={`/events/${id}`}>
                            <button className="btn btn-sm btn-primary">Details</button>
                        </Link>

                        {/* {
                            user?
                            <Link to={`/events/${id}`}>
                                <button className="btn btn-sm btn-primary">Details</button>
                            </Link>
                            :
                            <Link to={`/login`}>
                                <button className="btn btn-sm btn-primary">Details</button>
                            </Link>
                        } */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Service;