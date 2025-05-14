import Projetos from "@/json/projects.json"
import Card from "../Cards/Card"
import ButtonCard from "../Button/Button"
import { useState } from "react"

const Projects = () => {


    const [exibir, setExibir] = useState(false)
    const [nomeClicado, setNomeClicado] = useState('')

    const aoClicar = (nomeProjeto) => {
        if (exibir === false && window.innerWidth < 1280 || nomeClicado !== nomeProjeto) {
            setExibir(true);
        } else {
            setExibir(false)
        }
        setNomeClicado(nomeProjeto)

    }



    return (
        <div>

            {Projetos.map((projeto) =>

                <section key={projeto.id} className="flex xl:flex-row flex-col items-center xl:gap-[30px]">
                    <Card
                        className="w-fit h-fit bg-azulEscuro border-[1px] border-brancoCinza items-start xl:ml-[60px] my-[30px] peer"
                        titulo={projeto.titulo}
                        classH1="bg-brancoCinza text-[20px] p-[10px]"
                        children={
                            <div className="flex flex-col items-center p-[20px] gap-[30px]">
                                <button onClick={() => aoClicar(projeto.id)} className="xl:hidden block">
                                    <img
                                        className="w-auto xl:h-[180px] h-[80px] "
                                        src={`./images/Projetos-experiencia/${projeto.imagem}.webp`} alt="imagem do projeto"
                                    />
                                </button>
                                <img
                                    className="w-auto xl:h-[180px] h-[80px] xl:block hidden"
                                    src={`./images/Projetos-experiencia/${projeto.imagem}.webp`} alt="imagem do projeto"
                                />
                                <div className="flex xl:gap-[50px] gap-[20px]">
                                    <ButtonCard nome="Página" url={projeto.urlPage} className="bg-black text-[12px]" />
                                    <ButtonCard nome="Código" url={projeto.urlCode} className="bg-black text-[12px]" />
                                </div>
                            </div>
                        }
                    />

                    <div className={`hidden xl:block bg-azulEscuro text-white border-2 border-white rounded-[40px] xl:opacity-0 opacity-100 
                            xl:w-[400px] w-[250px] h-fit xl:p-[30px] p-[20px] xl:mr-[60px] xl:mb-0 mb-[50px] 
                            text-shadow-lg/100 text-shadow-black
                            transition-all duration-800 ease-in-out xl:peer-hover:translate-x-4 peer-hover:opacity-100
                            }`}>
                        <p className="whitespace-normal xl:text-[16px] text-[12px] break-keep text-justify">
                            {projeto.descricao}
                        </p>
                    </div>

                    {exibir && nomeClicado == projeto.id && (
                        <div className={`bg-azulEscuro text-white border-2 border-white rounded-[40px] xl:opacity-0 opacity-100 
                            xl:w-[400px] w-[250px] h-fit xl:p-[30px] p-[20px] xl:mr-[60px] xl:mb-0 mb-[50px] 
                            text-shadow-lg/100 text-shadow-black
                            transition-all duration-800 ease-in-out xl:peer-hover:translate-x-4 peer-hover:opacity-100
                            }`}>
                            <p className="whitespace-normal xl:text-[16px] text-[12px] break-keep text-justify">
                                {projeto.descricao}
                            </p>
                        </div>
                    )}
                </section>

            )}

        </div>
    )
}

export default Projects