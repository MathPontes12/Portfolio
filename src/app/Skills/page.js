'use client';

import Titles from "@/components/Titles/Titles";
import { useState } from "react"
import Mobile from "@/components/Skill/SkillMobile/Mobile";
import TaskBar from "@/components/Skill/Monitor/TaskBar/TaskBar";
import WindowSkills from "@/components/Skill/Monitor/WindowSkills/WindowSkills";
import SkillsPastes from "@/components/Skill/Monitor/SkillsPastes/SkillsPastes";

const SkillsPage = () => {

    const [janela, setJanela] = useState(false)
    const [textoJanela, setTextoJanela] = useState('')

    const aoClicar = (texto) => {
       if (janela === false || textoJanela !== texto) {
        setJanela(true);
       } else {
        setJanela(false)
       }
       setTextoJanela(texto)
    }

    const AoClicarNoCross = () => {
        setJanela(false)
    }


    return (
        <div className="flex flex-col items-center mb-[70px] xl:mt-[0] mt-[70px]" >

            <Titles titulo="Habilidades" />

            <main className="hidden relative xl:flex flex-col bg-[url(/images/bg-pc.png)] bg-cover xl:w-[800px] xl:h-[500px] 
             border-[rgba(255,255,255,0.15)] border-[4px] outline-[24px] outline-black">
                <div className="flex justify-start mx-[100px] mt-[30px] gap-[70px]">
                    <SkillsPastes texto="Front-end" aoClicar={aoClicar} />
                    <SkillsPastes texto="Back-end" aoClicar={aoClicar} />
                </div>

                {janela && (<WindowSkills tituloDaJanela={textoJanela} AoClicarNoCross={AoClicarNoCross}/>)}

                <TaskBar/>
            </main>

            <Mobile/>

        </div>

    )
}

export default SkillsPage