import { useState } from "react"
import AppWindow from "./App/App/AppWindow"
import MainMobile from "./App/Main/MainMobile"
import Titles from "@/components/Titles/Titles"


const Mobile = () => {

    const [app, setApp] = useState(false)
    let [textoApp, setTextoApp] = useState('')

    const AoClicar = (nome) => {
        if (app === false) {
            setApp(true);
           } else {
            setApp(false)
           }
           setTextoApp(nome)
    }

    const AoClicarEmVoltar = () => {
       setTextoApp('') 
    }


    return (
        <div className="xl:hidden w-full h-[100%] mt-[100px]">
            <Titles titulo="Habilidades" responsividade="xl:hidden block"/>
            {textoApp ? 
            <AppWindow nomeDoApp={textoApp} aoClicarEmVoltar={AoClicarEmVoltar}/> 
            :  
            <MainMobile AoClicar={AoClicar} aoClicarEmVoltar={AoClicarEmVoltar}/>}
            
        </div>
    )
}

export default Mobile