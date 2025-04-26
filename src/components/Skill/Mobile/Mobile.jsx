import { useState } from "react"
import AppWindow from "./App/App/AppWindow"
import MainMobile from "./App/Main/MainMobile"


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
        <div className="xl:hidden border-x-[12px] border-b-[21px] border-t-[12px] rounded-[35px] w-[280px] h-[570px]">
 
            {textoApp ? 
            <AppWindow nomeDoApp={textoApp} aoClicarEmVoltar={AoClicarEmVoltar}/> 
            :  
            <MainMobile AoClicar={AoClicar} aoClicarEmVoltar={AoClicarEmVoltar}/>}
            
        </div>
    )
}

export default Mobile