import skills from "@/json/skills.json"
import SkillCard from "../SkillCard/SkillCard"

const WindowSkills = ({ tituloDaJanela, AoClicarNoCross }) => {
    return (

        <div className="bg-black self-center mt-[15px] mr-[45px] w-[350px] h-[160px]">

            <header className="flex items-center justify-between bg-azultaskbar w-full h-[15px] p-[10px]">
                <img className="w-auto h-[10px]" src="/images/paste-icon.webp" alt="icone de pasta" />
                <p className="text-[10px] ml-[20px] mt-[3px]">{tituloDaJanela}</p>
                <button onClick={() => AoClicarNoCross()} className="hover:bg-[rgba(255,255,255,0.2)] cursor-pointer">
                    <img className="w-auto h-15px" src="/images/buttons.webp" alt="icones da janela" />
                </button>
            </header>


            <div className="grid grid-cols-3 place-items-center gap-[10px] mx-[5px] mt-[15px]">
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