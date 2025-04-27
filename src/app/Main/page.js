'use client';

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
        <div className="flex flex-col gap-[80px] mb-[100px] xl:pt-[0] pt-[90px]">
            <Line className={`place-self-end transition-all duration-800 ease-in-out ${expandir ? "xl:w-[594px] w-[250px]" : "w-[0px]"}`} />
            <PerfilContent />
            <Line className={`transition-all duration-800 ease-in-out ${expandir ? "xl:w-[594px] w-[250px]" : "w-[0px]"}`} />
            <Sobre/>
        </div>
    )
}

export default MainPage