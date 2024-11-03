import { AnimatedPinDemo } from "@/components/ExpandableCard"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { AnimatedPinHuman } from "@/components/ExpandableCardHuman"
const page = () => {
    return (
        <div className='bg-gradient-to-r from-zinc-950 to-zinc-900 pt-40 relative z-20 pb-10'>
            <h1 className='text-white pl-10 text-3xl'>Natural Disasters</h1>
            <AnimatedPinDemo className="" />
            <h1 className='text-white pl-10 text-3xl'>Human Disasters</h1>
            <AnimatedPinHuman className="" />
            <ShootingStars />
            <StarsBackground />

        </div>
    )
}

export default page

