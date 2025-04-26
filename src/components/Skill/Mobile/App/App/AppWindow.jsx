import MobileButtons from "../../MobileButtons"
import AppSkillsIcon from "./AppSkillsIcon"
import skills from "@/json/skills.json"


const AppWindow = ({ nomeDoApp, aoClicarEmVoltar }) => {
    return (
        <>
        <div className="bg-[#EAEAEA] flex flex-col h-full w-full rounded-[10px] gap-[9px]">
            <h1 className="bg-azulEscuro text-center rounded-[8px] w-full py-[20px] text-brancoCinza">
                {nomeDoApp}
            </h1>
            <div className="mt-[20px] mx-[20px] gap-[12px] grid grid-cols-3 place-items-center">

                {skills[nomeDoApp].map((skill) =>

                    <AppSkillsIcon
                        key={skill.id}
                        nome={skill.nome}
                        tipo={skill.tipo}
                    />
                )}
            </div>
        </div>
        <MobileButtons aoClicarEmVoltar={aoClicarEmVoltar} color="B" />
        </>
    )
}

export default AppWindow

