'use client';

import { useState } from "react"
import LogoPerfil from "./Logo"
import Menu from "./Menu"
import MenuMobile from "./MenuMobile"


const Banner = () => {

    const [menuAparece, setMenuAparece] = useState(false)

    const aoClicar = () => {
        if (menuAparece === false) {
            setMenuAparece(true)
        }
    }

    const clicarPraFechar = () => {
        setMenuAparece(false)
    }


    return (

        <>
            <header className="xl:flex xl:flex-row hidden items-center justify-center my-[30px] gap-[80px]"> 
                    <LogoPerfil />
                    <Menu />
            </header>

            <header className="xl:hidden block mb-[50px]">
                
                {menuAparece ? <MenuMobile clicarPraFechar={clicarPraFechar}/> : <button onClick={() => aoClicar()}>
                    <img className="absolute top-[30px] left-[30px] w-[40px] h-auto" src="./images/banner/menuW.png" alt="botao de menu" />
                </button>}
            </header>

        </>
    )
}

export default Banner