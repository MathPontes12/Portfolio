'use client';

import Titles from "@/components/Titles/Titles";
import Mobile from "@/components/Skill/Mobile/Mobile";
import Monitor from "@/components/Skill/Monitor/Monitor";


const SkillsPage = () => {

    return (
        <div className="flex flex-col items-center xl:ml-[-6px] xl:pt-[60px] pb-[150px] pt-[90px]
        xl:bg-[url(/images/bgSkill.png)] h-[745px] bg-cover" >

            <Monitor/>  
            <Mobile/>
            
        </div>

    )
}

export default SkillsPage

