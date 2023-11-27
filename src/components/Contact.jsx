import React from 'react'
import {
    FaGithub,
    FaLinkedin,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[1200px] w-full justify-center items-center'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Reach Me Out</p>
                </div>
                <div className='grid md:grid-cols-3 gap-3'>
                    {/* Grid Item */}
                    <div className='flex justify-center items-center flex-col'>
                        {/* Hover Effects */}
                        <div className='flex justify-center items-center flex-col'>
                            <a
                                className='flex items-center w-full text-gray-300'
                                href='/'
                            >
                                <HiOutlineMail size={50} />&nbsp;sucisetiawati92@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-center items-center flex-col'>
                        {/* Hover Effects */}
                        <div className='flex justify-center items-center flex-col'>
                            <a
                                className='flex items-center w-full text-gray-300'
                                href='/'
                            >
                                <FaLinkedin size={50} />&nbsp;Suci Setiawati
                            </a>
                        </div>
                    </div>

                    <div className='flex justify-center items-center flex-col'>
                        {/* Hover Effects */}
                        <div className='flex justify-center items-center flex-col'>
                            <a
                                className='flex items-center w-full text-gray-300'
                                href='/'
                            >
                                <FaGithub size={50} />&nbsp;&nbsp;Suci Setiawati
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact