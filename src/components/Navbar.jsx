import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100vw] flex justify-between z-30 p-8 pr-11 items-start'>
            <div className='text-white'>
                <Image src={'/logo.png'} height={100} width={100} alt='logo'>

                </Image>
            </div>
            <ul className='list-none text-white flex gap-11 font-bold'>
                <li>Home</li>
                <li>Threats</li>
                <li>Solutions</li>
                <li>About us</li>
            </ul>

        </div>
    )
}

export default Navbar
