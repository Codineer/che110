"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
    return (
        (<div className="pt-9 p-10 w-full flex items-center justify-center flex-wrap gap-10 gap-y-24 mb-8   ">
            {
                naturalDisasters.map((disaster, index) => <PinContainer key={index} title={disaster.tags[1]} href={'/threats'}>
                    <div
                        className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            {disaster.title}
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                {disaster.description}
                            </span>
                        </div>
                        <div
                            className="flex flex-1 h-40 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                            <img src={disaster.image} className="object-cover w-full h-42" alt="" />
                        </div>
                    </div>
                </PinContainer>)
            }

        </div>)
    );
}

const naturalDisasters = [

    {
        title: "Earthquake",
        description: "A sudden and intense shaking of the ground caused by the movement of tectonic plates.",
        image: "https://plus.unsplash.com/premium_photo-1695914185618-475412b5d982?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "tectonic movement", "earth movement", "geological hazard"]
    },
    {
        title: "Hurricane",
        description: "A powerful tropical storm with strong winds and heavy rain, typically forming over warm ocean waters.",
        image: "https://plus.unsplash.com/premium_photo-1661881999341-61365770f7b8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "tropical storm", "storm", "meteorological hazard"]
    },
    {
        title: "Flood",
        description: "An overflow of water onto normally dry land, often caused by heavy rainfall or melting snow.",
        image: "https://plus.unsplash.com/premium_photo-1661962476059-13543ea45d4d?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "water overflow", "flooding", "hydrological hazard"]
    },
    {
        title: "Wildfire",
        description: "Uncontrolled fires that spread rapidly, often fueled by dry vegetation and strong winds.",
        image: "https://plus.unsplash.com/premium_photo-1689947050139-695d362b0f83?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "forest fire", "vegetation", "fire hazard"]
    },
    {
        title: "Tsunami",
        description: "A series of ocean waves caused by large underwater disturbances, such as earthquakes or volcanic eruptions.",
        image: "https://plus.unsplash.com/premium_photo-1664304466416-435c9bc9d1db?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "ocean waves", "sea surge", "geological hazard"]
    },
    {
        title: "Volcanic Eruption",
        description: "The eruption of molten lava, ash, and gases from a volcano, which can cause widespread destruction.",
        image: "https://plus.unsplash.com/premium_photo-1726478764284-b98a3f81d831?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["natural disaster", "volcanic activity", "lava flow", "geological hazard"]
    },

];
