import skills from "@/json/skills.json"
import SkillCard from "../SkillCard/SkillCard"

const WindowSkills = ({ tituloDaJanela, AoClicarNoCross }) => {
    return (

        <div className="bg-black self-center w-[500px] h-[300px]">

            <header className="flex items-center justify-between bg-azultaskbar w-[500px] h-[25px] px-[10px]">
                <img className="w-auto h-[20px]" src="/images/paste-icon.png" alt="icone de pasta" />
                <p className="text-[10px] ml-[20px] mt-[3px]">{tituloDaJanela}</p>
                <button onClick={() => AoClicarNoCross()} className="hover:bg-[rgba(255,255,255,0.2)] cursor-pointer">
                    <img className="w-auto h-15px" src="/images/buttons.png" alt="icones da janela" />
                </button>
            </header>


            <div className="grid grid-cols-3 place-items-center gap-[20px] mt-[40px]">
                {skills[tituloDaJanela].map((skill) => 
                    
                    <SkillCard 
                    key={skill.id}
                    nome={skill.nome}
                    tipo={skill.tipo}
                    />
                    )}
            </div>

        </div>

    )
}

export default WindowSkills