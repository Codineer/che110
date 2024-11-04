import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100vw] flex justify-between z-30 p-8 pr-11 items-start'>
            <div className='text-white'>
                <Link href='/'>
                    <Image src={'/logo.png'} height={100} width={100} alt='logo'>

                    </Image>
                </Link>
            </div>
            <ul className='list-none text-white flex gap-11 font-bold'>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li><Link href='/threats'>
                    Threats
                </Link>
                </li>
                <li>
                    <Link href='/solutions'>
                        Solutions
                    </Link>
                </li>

                <li>
                    <Link href='/aboutus'>
                        About us
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
