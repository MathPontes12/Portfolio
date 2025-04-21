'use client';

import Line from "@/components/Perfil/Line"
import PerfilContent from "@/components/Perfil/PerfilContent"
import { useEffect, useState } from "react";


const MainPage = () => {

    const [expandir, setExpandir] = useState(false);

    useEffect(() => {
      setTimeout(() => setExpandir(true));
    }, []);

    return (
        <div className="flex flex-col gap-[80px] mb-[30px]">
            <Line className= {`place-self-end transition-all duration-800 ease-in-out ${
        expandir ? "w-[594px]" : "w-[0px]"}`} />
            <PerfilContent/>
            <Line className={`transition-all duration-800 ease-in-out ${
        expandir ? "w-[594px]" : "w-[0px]"}`} />
        </div>
    )
}

export default MainPage