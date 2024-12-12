import React from 'react';
import about_img from '../assets/Background-home.png';

const About = () => {
    return (
        <section className=" mt-[10vh] bg-black" >
            <div className="" >
                <div className='flex'>
                    <div>
                        <img src={about_img} alt="About Us Background" className='h-full' />
                    </div>

                    <div className='bg-primaryGreen '>
                        <div className='pl-12 mx-40'>
                            <span className='text-white mb-[5px] text-[12px]font-semibold tracking-wide'>ABOUT US</span>
                            <h2 className='text-white h2 mb-6'>Welcome to CabBook</h2>
                            <p className='text-white p'>Welcome to CabBooking, your reliable and trusted partner for seamless travel experiences! We are committed to making your journeys safe, convenient, and hassle-free, whether you're commuting daily or embarking on a long-distance trip. With our easy-to-use booking platform, you can access a fleet of well-maintained cabs driven by professional, courteous drivers.</p>
                            <br />
                            <p className='text-white mb-10'>At CabBooking, customer satisfaction is at the heart of what we do. Our mission is to offer comfortable and punctual rides, ensuring that you reach your destination with ease. We pride ourselves on our transparent pricing, on-time arrivals, and 24/7 availability, making us your go-to choice for all your travel needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;