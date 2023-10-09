import React, { useContext } from 'react';
import banner1 from "../../assets/banner-1.jpeg"
import banner2 from "../../assets/banner-2.jpeg"
import banner3 from "../../assets/banner-3.jpeg"
import banner4 from "../../assets/banner-4.jpg"
import banner5 from "../../assets/banner-5.jpeg"
import banner6 from "../../assets/banner-6.jpg"
import { AuthContext } from '../../AuthProviders/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { services } = useContext(AuthContext)

    return (
        <div className='relative'>
            <div className="carousel w-full  lg:h-[80vh]">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-neutral-content">
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="w-full mx-auto py-10 px-3 lg:px-10 lg:py-1 ">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Conferences and Seminars</h1>
                                <p className="mb-5">Conferences and seminars are gatherings of professionals for knowledge sharing. These events bring together experts and industry leaders to discuss, present, and exchange ideas..</p>
                                <Link to="/events/1"><button className='btn btn-primary btn-sm'>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className=" w-full mx-auto py-10 px-3 lg:px-10lg:py-1">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Trade Shows and Expos</h1>
                                <p className="mb-5">Trade shows and expos provide businesses with opportunities to showcase their products and services to a targeted audience. These events serve as platforms for companies to exhibit innovations, launch new products, and build brand visibility.</p>
                                <Link to="/events/2"><button className='btn btn-primary btn-sm'>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className=" w-full mx-auto py-10 px-3 lg:px-10lg:py-1">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Team Building Workshops</h1>
                                <p className="mb-5">Team building workshops are designed to strengthen teamwork, communication, and collaboration among employees. These workshops often include outdoor activities, problem-solving exercises, and group challenges.</p>
                                <Link to="/events/3"><button className='btn btn-primary btn-sm'>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className=" w-full mx-auto py-10 px-3 lg:px-10lg:py-1">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Product Launches</h1>
                                <p className="mb-5">Product launches are strategic events where new products or services are introduced to the market. These launches often involve marketing campaigns, media coverage, and targeted promotions to create excitement and attract customers.</p>
                                <Link to="/events/4"><button className='btn btn-primary btn-sm'>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="item5" className="carousel-item w-full relative">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner5})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div className=" w-full mx-auto py-10 px-3 lg:px-10lg:py-1">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Corporate Meetings</h1>
                                <p className="mb-5">Corporate meetings are vital gatherings of company executives, departments, or teams to discuss business strategies, goals, and operations. These meetings can be regular sessions or special events for decision-making, planning, and alignment.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div id="item6" className="carousel-item w-full relative">
                    <div className="hero  lg:h-[80vh]" style={{ backgroundImage: `url(${banner6})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="  text-neutral-content">
                            <div className=" w-full mx-auto py-10 px-3 lg:px-10lg:py-1">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Award Ceremonies</h1>
                                <p className="mb-5">Award ceremonies are special events designed to recognize and honor outstanding achievements and contributions within an organization. Awards may be presented to employees, partners, or other stakeholders who have demonstrated excellence and dedication.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="flex justify-center w-full py-2 gap-2 absolute bottom-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;