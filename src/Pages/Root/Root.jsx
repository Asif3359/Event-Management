import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';

const Root = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <div className='mb-5'>
                    <NavBar></NavBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='mt-10 bg-neutral'>
                <footer className=" p-10  text-neutral-content container mx-auto ">
                    <div className='footer '>
                        <nav>
                            <header className="footer-title">Services</header>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Company</header>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Legal</header>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </nav>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Root;