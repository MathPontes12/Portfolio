'use client';

import Titles from "@/components/Titles/Titles";
import Mobile from "@/components/Skill/Mobile/Mobile";
import Monitor from "@/components/Skill/Monitor/Monitor";


const SkillsPage = () => {

    return (
        <div className="flex flex-col items-center mb-[70px] xl:pt-[0px] pt-[90px]" >

            <Titles titulo="Habilidades" />
            <Monitor/>  
            <Mobile/>
            
        </div>

    )
}

export default SkillsPage