import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import PopEvent from '../PopEvent/PopEvent';

const PopEvents = () => {
    const { PopularEvents } = useContext(AuthContext)
    return (
        <div className='space-y-5'>
            <div className='text-center w-2/3 mx-auto space-y-4'>
                <h1 className='text-3xl font-bold'>Popular Events </h1>
                <p>"Celebrate life's milestones with us and experience the magic of our popular events meticulously crafted by our talented team at Your Event Management Company."</p>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-2 gap-2'>
                {
                    PopularEvents.map(  popular => <PopEvent key={popular.id} popular={popular}></PopEvent>)
                }
            </div>

        </div>
    );
};

export default PopEvents;