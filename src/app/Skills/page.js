'use client';

import Titles from "@/components/Titles/Titles";
import Mobile from "@/components/Skill/Mobile/Mobile";
import Monitor from "@/components/Skill/Monitor/Monitor";
import Footer from "@/components/Footer/Footer";


const SkillsPage = () => {

    return (
        <>
        <div className="flex flex-col items-center xl:ml-[-6px] xl:pt-[60px] xl:pb-[150px]
        xl:bg-[url(/images/bgSkill.webp)] bg-cover xl:h-[745px]" >

            <Monitor/>  
            <Mobile/>
            
        </div>
        <Footer  />
        </>
    )
}

export default SkillsPage

