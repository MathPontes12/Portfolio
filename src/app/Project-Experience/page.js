'use client';

import Card from "@/components/Cards/Card"
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/ProjectsExperience/Projects";
import Titles from "@/components/Titles/Titles"



const ProjectExperience = () => {
    return (
        <>
        <div className="flex flex-col items-center xl:mt-[200px] mb-[80px] xl:pt-[0] pt-[90px]">
            <Card
                className="xl:w-[1000px] w-[300px] h-[fit] bg-black flex flex-col gap-[10px]"
                classH1="bg-brancoCinza text-[20px] p-[30px]"
                titulo="Conheça um pouco dos meus projetos e experiências"
            >

                <Projects />

            </Card>
        </div>
        <Footer />
        </>
    )
}

export default ProjectExperience