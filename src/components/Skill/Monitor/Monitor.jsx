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

    return (

        <div className="hidden relative right-[-12px] top-[210px] xl:w-[455px] xl:h-[262px] 
        xl:flex flex-col">
            <div className="flex justify-start mx-[100px] mt-[30px] gap-[20px]">
                <SkillsPastes texto="Front-end" aoClicar={aoClicar} />
                <SkillsPastes texto="Back-end" aoClicar={aoClicar} />
            </div>

            {janela && (<WindowSkills tituloDaJanela={textoJanela} AoClicarNoCross={AoClicarNoCross} />)}

            <TaskBar />
        </div>

    )
}

export default Monitor