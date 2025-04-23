'use client';

import Card from "@/components/Cards/Card"
import Projects from "@/components/ProjectsExperience/Projects";
import Titles from "@/components/Titles/Titles"



const ProjectExperience = () => {
    return (

        <div className="flex flex-col items-center mb-[80px]">
            <Titles titulo="Projetos/Experiências" />
            <Card
                className="w-[1000px] h-[fit] bg-black flex flex-col gap-[10px]"
                classH1="bg-brancoCinza text-[20px] p-[30px]"
                titulo="Conheça um pouco dos meus projetos e experiências"
                children={
                    <Projects/>
                }
            />
        </div>

    )
}

export default ProjectExperience