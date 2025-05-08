import MobileButtons from "../../MobileButtons"
import AppSkillsIcon from "./AppSkillsIcon"
import skills from "@/json/skills.json"


const AppWindow = ({ nomeDoApp, aoClicarEmVoltar }) => {
    return (
        <div className="bg-[url(/images/bgapp.png)] bg-cover h-[597px] flex flex-col items-center justify-center">
            <h1 className="absolute top-[177px] ml-[20px] text-white opacity-80"> {nomeDoApp} </h1>
            <div className="flex flex-col mt-[130px] gap-[215px]">
                <div className="pt-[0px] mr-[85px] ml-[100px]  grid grid-cols-3 place-items-center">
                    {skills[nomeDoApp].map((skill) =>

                        <AppSkillsIcon
                            key={skill.id}
                            nome={skill.nome}
                            tipo={skill.tipo}
                        />
                    )}
                </div>
                <MobileButtons aoClicarEmVoltar={aoClicarEmVoltar} color="B" posicao="ml-[20px]" />
            </div>
        </div>
    )
}

export default AppWindow

