import React from 'react';

const PopEvent = ({ popular }) => {
    const { id, name, img_url, small_title, details, dataAos } = popular;
    return (
        <div data-aos={`${dataAos} `} className='rounded-lg'>
            <div className="flex flex-col justify-between items-center  w-full rounded-lg border-2">
                <figure className='flex-1'><img src={img_url} className='h-96 w-full rounded-lg' alt="Movie" /></figure>
                <div className="flex-1  py-5 px-4 flex flex-col justify-between ">
                    <div className='flex-1'>
                        <h2 className="card-title text-4xl mb-3">{small_title}</h2>
                        <h3 className='font-bold text-lg'>{name}</h3>
                        <p>{details.slice(0, 140)}..</p>
                    </div>
                    <div className="card-actions justify-end flex-1">
                        <button className="btn btn-primary btn-sm">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopEvent;