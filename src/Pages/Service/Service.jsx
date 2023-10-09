
import { FaLocationDot } from "react-icons/fa6";
const Service = ({ service }) => {
    const { img_url, details, name, small_title, amount, location } = service
    return (
        <div className="bg-gray-100 pb-4 rounded-lg ">
            <div className="bg-gray-100  pb-4 rounded-lg">
                <div className="flex flex-col gap-4 justify-between relative group z-10 overflow-hidden">
                    <div className="relative group z-10 overflow-hidden">
                        <img className=" h-60 lg:h-80 w-full rounded-lg" src={service.img_url} alt="" />
                        <div className="overlay rounded-lg h-20 absolute bottom-0 w-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex justify-start items-center">
                            <button className="btn my-3 mx-3 btn-primary group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">Buy Now</button>
                        </div>
                    </div>
                    <div className="space-y-3 px-5 flex flex-col justify-between">
                        <h1 className="font-bold text-3xl">{small_title}</h1>
                        <h1 className="font-bold text-xl">{name}</h1>
                        <p className="">{details}</p>
                        <div className="flex justify-start gap-3 items-center">
                            <p><FaLocationDot></FaLocationDot></p>
                            <p>{location}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Price: ${amount}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Service;