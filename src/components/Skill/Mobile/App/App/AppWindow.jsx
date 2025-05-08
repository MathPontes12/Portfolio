import MobileButtons from "../../MobileButtons"
import AppSkillsIcon from "./AppSkillsIcon"
import skills from "@/json/skills.json"


const AppWindow = ({ nomeDoApp, aoClicarEmVoltar }) => {
    return (
        <>
        <div className="bg-[url(/images/bgapp.png)] bg-cover h-[597px] flex flex-col items-center justify-center">
            <h1 className="fixed top-[170px] ml-[20px] text-white opacity-80"> {nomeDoApp} </h1>
            <div className="mt-[20px] mr-[85px] ml-[100px]  grid grid-cols-3 place-items-center">
                {skills[nomeDoApp].map((skill) =>

                    <AppSkillsIcon
                        key={skill.id}
                        nome={skill.nome}
                        tipo={skill.tipo}
                    />
                )}
            </div>
        </div>
        <MobileButtons aoClicarEmVoltar={aoClicarEmVoltar} color="B"/>
        </>
    )
}

export default AppWindow

