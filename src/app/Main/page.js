'use client';

import ScrollDownButton from "@/components/Button/ButtonArrowDown";
import Footer from "@/components/Footer/Footer";
import Line from "@/components/Perfil/Line"
import PerfilContent from "@/components/Perfil/PerfilContent"
import Sobre from "@/components/Sobre/Sobre";
import { useEffect, useState } from "react";


const MainPage = () => {

    const [expandir, setExpandir] = useState(false);

    useEffect(() => {
        setTimeout(() => setExpandir(true));
    }, []);

    

    return (
        <>
        <div className="flex flex-col gap-[20px] xl:mt-[150px] mb-[80px] pt-[40px]">
            <div className="flex flex-col xl:gap-[80px] gap-[30px]">
            <Line className={`place-self-end transition-all duration-800 ease-in-out ${expandir ? "xl:w-[594px] w-[250px]" : "w-[0px]"}`} />
            <PerfilContent />
            <Line className={`transition-all duration-800 ease-in-out ${expandir ? "xl:w-[594px] w-[250px]" : "w-[0px]"}`} />
            </div>
            <ScrollDownButton/>
            <Sobre/>
            
        </div>
        <Footer />
        </>
    )
}

export default MainPage