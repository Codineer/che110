"use client";
import React from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
const people = [
    {
        id: 1,
        name: "Utkarsh Shakya",
        designation: "Web Developer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Siddharth Mishra",
        designation: "Web Designer",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Harish Suthar",
        designation: "Researcher",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },

];


const Page = () => {
    return (

        <div className="bg-gradient-to-r  z-20 h-[100vh] from-zinc-950 to-zinc-900 relative  flex  items-center justify-center  w-full flex-col">
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Who We Are <br /> What We Stand For
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    At <strong className='text-lg'>Envirohazard</strong>, we educate communities about natural disasters and their impacts. Our mission is to transform complex insights into accessible knowledge, fostering resilience for a safer world.</p>

            </div>
            <div className='flex'>
                <AnimatedTooltip items={people} />
            </div>
            <ShootingStars />
            <StarsBackground />

        </div>

    )
}

export default Page


