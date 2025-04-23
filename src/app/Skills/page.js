'use client';

import SkillsPastes from "@/components/Skill/SkillsPastes/SkillsPastes"
import TaskBar from "@/components/Skill/TaskBar/TaskBar";
import Titles from "@/components/Titles/Titles";
import WindowSkills from "@/components/Skill/WindowSkills/WindowSkills";
import { useState } from "react"

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
        <div className="flex flex-col items-center xl:mb-[70px]" >

            <Titles titulo="Habilidades" />

            <main className="relative flex flex-col bg-[url(/images/bg-pc.png)] bg-cover xl:w-[800px] xl:h-[500px] 
             border-[rgba(255,255,255,0.15)] border-[4px] outline-[24px] outline-black">
                <div className="flex justify-start mx-[100px] mt-[30px] gap-[70px]">
                    <SkillsPastes texto="Front-end" aoClicar={aoClicar} />
                    <SkillsPastes texto="Back-end" aoClicar={aoClicar} />
                </div>

                {janela && (<WindowSkills tituloDaJanela={textoJanela} AoClicarNoCross={AoClicarNoCross}/>)}

                <TaskBar/>
            </main>
        </div>

    )
}

export default SkillsPage