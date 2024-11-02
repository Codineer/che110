"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function ImpactSectionHome() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const Skeleton = ({ title, content }) => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {title}
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {content}
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: (
            <Skeleton
                title="Human cause: Forest fire"
                content="Human activities, such as unattended campfires, discarded cigarettes, and deforestation, are major causes of forest wildfires, sparking devastating blazes that threaten ecosystems and communities."
            />
        ),
        className: "md:col-span-2",
        thumbnail:
            "https://images.pexels.com/photos/5608106/pexels-photo-5608106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        content: (
            <Skeleton
                title="Human cause: Deforestation"
                content="Human-driven deforestation, largely through agriculture, logging, and urban expansion, leads to the large-scale destruction of forests, disrupting ecosystems, reducing biodiversity, and contributing to climate change."
            />
        ),
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/1658580/pexels-photo-1658580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        content: (
            <Skeleton
                title="Natural cause: Volcanic Eruption"
                content="Volcanic eruptions are caused by the movement of tectonic plates, which can lead to the accumulation of magma beneath the Earth's surface; when pressure builds sufficiently, it results in explosive eruptions or the gentle flow of lava."
            />
        ),
        className: "col-span-1",
        thumbnail:
            "https://images.pexels.com/photos/6307488/pexels-photo-6307488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        content: (
            <Skeleton
                title="Natural Cause: Tectonic Movement"
                content="Tectonic activity, driven by the movement of the Earth's lithospheric plates, causes natural phenomena such as earthquakes, volcanic eruptions, and cyclones."
            />
        ),
        className: "md:col-span-2",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dramatic_Views_of_Hurricane_Florence_from_the_International_Space_Station_From_9_12_%2842828603210%29.jpg/640px-Dramatic_Views_of_Hurricane_Florence_from_the_International_Space_Station_From_9_12_%2842828603210%29.jpg",
    },
];
