"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Page() {
    return (
        <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 pt-40 relative z-20  text-white pl-20 pb-24">

            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-xl mb-4")}>
                                {item.title}
                            </p>

                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <img
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000px"
                                        width="1000px"
                                        className="rounded-lg mb-10 object-cover" />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
            <ShootingStars />
            <StarsBackground />
        </div>

    );
}
const dummyContent = [
    {
        title: "Preventing Wildfire Spread",
        description: (
            <>
                <p>
                    Firebreaks, or gaps in vegetation, are crucial for slowing the spread of wildfires. By creating these controlled areas, fire can be contained more effectively. Community awareness and education on preventing accidental fires, such as through campfire safety and proper disposal of flammable materials, are also key in minimizing risks.
                </p>
                <p>
                    Controlled burns, where small, managed fires are set intentionally, help remove excess dry vegetation that could fuel larger, uncontrolled wildfires. Additionally, maintaining clear evacuation routes and ensuring emergency response teams are well-prepared can protect lives and property in fire-prone areas. Technology, like fire-monitoring drones and satellite systems, provides early alerts and data to mitigate wildfire damage.
                </p>
            </>
        ),
        badge: "Wildfire",
        image:
            "https://plus.unsplash.com/premium_photo-1689947050139-695d362b0f83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Preventing Earthquake Damage",
        description: (
            <>
                <p>
                    Constructing earthquake-resistant buildings using flexible materials like steel and implementing shock-absorbing foundations is critical in earthquake-prone areas. These techniques allow structures to sway with seismic waves, reducing potential damage and increasing safety for occupants. Retrofitting older buildings with updated safety measures can also make a significant difference.
                </p>
                <p>
                    Regular earthquake drills prepare residents to respond quickly during tremors. Community awareness on securing heavy objects and furniture inside buildings helps prevent injuries. Furthermore, developing early-warning systems and investing in scientific research to better predict seismic activity are essential in managing earthquake risks effectively.
                </p>
            </>
        ),
        badge: "Earthquake",
        image:
            "https://media.istockphoto.com/id/1279232649/photo/rescuer-search-with-help-of-rescue-dog-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=jJ75keIlXwOUs0QUDdNVpxOiVgrOuKylYUaMctXuExM=",
    },
    {
        title: "Preventing Flood Damage",
        description: (
            <>
                <p>
                    Building flood barriers and levees helps to protect urban areas from rising water levels. Constructing homes and infrastructure on raised foundations in flood-prone areas can also prevent water damage. Additionally, developing efficient stormwater drainage systems allows rainwater to disperse quickly, reducing the risk of urban flooding.
                </p>
                <p>
                    Preserving natural wetlands and riverside vegetation helps absorb excess water, acting as a buffer against floods. Early-warning systems and community preparedness programs allow for timely evacuations and precautions. Sustainable land-use planning that avoids building in high-risk areas is a proactive way to prevent flood-related disasters.
                </p>
            </>
        ),
        badge: "Flood",
        image:
            "https://images.unsplash.com/photo-1541710005980-7ea80ff232d6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Preventing Hurricane Damage",
        description: (
            <>
                <p>
                    Building hurricane-resistant structures is essential for reducing damage in high-risk coastal areas. Using reinforced materials, storm shutters, and impact-resistant windows can make buildings more resilient to strong winds. Strict building codes, enforced consistently, ensure new structures meet safety standards to withstand hurricane forces.
                </p>
                <p>
                    Coastal protection measures, like sea walls and barrier islands, are crucial to managing storm surges and flooding. Restoring natural buffers such as wetlands also helps absorb storm energy before it reaches inhabited areas. Implementing early warning systems and evacuation plans saves lives, providing residents with the necessary time to secure their property and reach safer locations.
                </p>
            </>
        ),
        badge: "Hurricane",
        image:
            "https://plus.unsplash.com/premium_photo-1727537538673-07a31d71efe3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Preventing Drought Effects",
        description: (
            <>
                <p>
                    Efficient water management is critical for minimizing the impact of droughts. Rainwater harvesting systems and conservation practices help communities store and use water during dry periods. Public awareness campaigns on water conservation promote responsible water use, especially during times of scarcity.
                </p>
                <p>
                    Developing drought-resistant crop varieties and adopting sustainable farming methods help maintain agricultural productivity even when water supplies are low. Reducing water wastage in irrigation through techniques like drip irrigation is essential in conserving water resources. Governments and communities can also establish policies for regulated water distribution, ensuring fair access to water during prolonged droughts.
                </p>
            </>
        ),
        badge: "Drought",
        image:
            "https://plus.unsplash.com/premium_photo-1664302487872-e83f6d0ff1d9?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Preventing Landslide Hazards",
        description: (
            <>
                <p>
                    Landslide prevention starts with stabilizing slopes using vegetation. Planting trees and shrubs on steep areas helps to anchor soil, reducing the likelihood of landslides. Retaining walls and terracing are additional methods that can add stability to vulnerable slopes, particularly in mountainous or hilly regions.
                </p>
                <p>
                    Effective drainage systems prevent water from accumulating and weakening the soil, which can lead to landslides. Identifying and monitoring high-risk areas through regular geological surveys also enables timely interventions. Restricting construction on unstable slopes and educating communities about landslide risks are crucial in protecting both lives and property from potential landslide events.
                </p>
            </>
        ),
        badge: "Landslide",
        image:
            "https://images.unsplash.com/photo-1611932846203-c4c9e2e825a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
