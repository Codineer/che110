"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinHuman() {
    return (
        (<div className="pt-9 p-10 w-full flex items-center justify-center flex-wrap gap-10 gap-y-24">
            {
                humanCausedDisasters.map((disaster) => <PinContainer title={disaster.tags[1]} href={'/threats'}>
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
                            className="flex flex-1 w-full h-40 rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                            <img src={disaster.image} className="object-cover w-full h-42" alt="" />
                        </div>
                    </div>
                </PinContainer>)
            }

        </div>)
    );
}

const humanCausedDisasters = [
    {
        title: "Oil Spill",
        description: "An accidental release of oil into the ocean or coastal waters, often resulting in severe environmental damage.",
        image: "https://images.unsplash.com/photo-1618913001612-b02bdf3f6638?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an actual image URL
        tags: ["human-caused disaster", "environmental impact", "pollution"]
    },
    {
        title: "Nuclear Disaster",
        description: "An incident involving the release of radioactive materials into the environment, typically due to a reactor failure or accident.",
        image: "https://plus.unsplash.com/premium_photo-1715885662348-bba72d3c2819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an actual image URL
        tags: ["human-caused disaster", "radioactive contamination", "public safety"]
    },
    {
        title: "Deforestation",
        description: "The large-scale removal of trees from forested areas, leading to loss of biodiversity and disruption of ecosystems.",
        image: "https://images.unsplash.com/photo-1475139195209-c6343f17842f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an actual image URL
        tags: ["human-caused disaster", "environmental degradation", "climate change"]
    },
    {
        title: "Industrial Accident",
        description: "An unforeseen event in an industrial setting that causes harm to people, property, or the environment, such as chemical spills or explosions.",
        image: "https://plus.unsplash.com/premium_photo-1716745004893-f6abdc902f31?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an actual image URL
        tags: ["human-caused disaster", "workplace safety", "hazardous materials"]
    },
    {
        title: "Toxic Waste Dumping",
        description: "The illegal or improper disposal of hazardous waste materials, leading to soil and water contamination.",
        image: "https://static.toiimg.com/thumb/msid-87448631,width-400,height-225,resizemode-72/87448631.jpg", // Replace with an actual image URL
        tags: ["human-caused disaster", "pollution", "environmental justice"]
    },
    {
        title: "Urban Flooding",
        description: "Flooding in urban areas often caused by poor infrastructure, deforestation, and climate change, exacerbating the impact of heavy rainfall.",
        image: "https://plus.unsplash.com/premium_photo-1727266867745-0927e5ebd6fe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with an actual image URL
        tags: ["human-caused disaster", "infrastructure failure", "climate change"]
    }
];
