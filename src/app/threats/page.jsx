import { AnimatedPinDemo } from "@/components/ExpandableCard"
import { AnimatedPinHuman } from "@/components/ExpandableCardHuman"
const page = () => {
    return (
        <div className='bg-gradient-to-r from-black to-zinc-900 pt-40 relative z-20 pb-10'>
            <h1 className='text-white pl-10 text-3xl'>Natural Disasters</h1>
            <AnimatedPinDemo className="" />
            <h1 className='text-white pl-10 text-3xl'>Human Disasters</h1>
            <AnimatedPinHuman className="" />


        </div>
    )
}

export default page

