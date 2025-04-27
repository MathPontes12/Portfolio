import { useState } from "react";
import SkillsPastes from "./SkillsPastes/SkillsPastes";
import WindowSkills from "./WindowSkills/WindowSkills";
import TaskBar from "./TaskBar/TaskBar";


const Monitor = () => {

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

    return(

        <main className="hidden relative xl:flex flex-col bg-[url(/images/bg-pc.webp)] bg-cover xl:w-[800px] xl:h-[500px] 
        border-[rgba(255,255,255,0.15)] border-[4px] outline-[24px] outline-black">
           <div className="flex justify-start mx-[100px] mt-[30px] gap-[70px]">
               <SkillsPastes texto="Front-end" aoClicar={aoClicar} />
               <SkillsPastes texto="Back-end" aoClicar={aoClicar} />
           </div>

           {janela && (<WindowSkills tituloDaJanela={textoJanela} AoClicarNoCross={AoClicarNoCross}/>)}

           <TaskBar/>
       </main>

    )
}

export default Monitor