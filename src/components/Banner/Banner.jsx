'use client';

import { useState } from "react"
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

        <div className="flex">

            <header className="xl:flex xl:flex-row xl:w-full hidden gap-[80px]"> 
                    <Menu />
            </header>

            <header className="xl:hidden block mb-[50px]">
                
                {menuAparece ? <MenuMobile clicarPraFechar={clicarPraFechar}/> : <button onClick={() => aoClicar()}>
                    <img className="absolute top-[50px] left-[30px] w-[40px] h-auto" src="./images/banner/menuW.webp" alt="botao de menu" />
                </button>}
            </header>

        </div>
    )
}

export default Banner