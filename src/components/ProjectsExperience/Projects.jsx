import Projetos from "@/json/projects.json"
import Card from "../Cards/Card"

const Projects = () => {
    return (
        <div>

            {Projetos.map((projeto) =>

                <section key={projeto.id} className="flex items-center gap-[30px]">
                    <Card
                        className="w-fit h-fit bg-azulEscuro border-[1px] border-brancoCinza items-start ml-[60px] my-[30px] peer"
                        titulo={
                            <a href={projeto.url} className="hover:opacity-50 cursor-pointer"  target="_blank" rel="noopener noreferrer">
                                {projeto.titulo}
                            </a>
                        }
                        classH1="bg-brancoCinza text-[20px] p-[10px]"
                        children={
                            <img
                                className="w-auto h-[200px] p-[30px]"
                                src={`./images/Projetos-experiencia/${projeto.imagem}.png`} alt="imagem do projeto"
                            />
                        }
                    />
                    <div className={`bg-azulEscuro text-white border-2 border-white rounded-[40px] opacity-0 
                                    w-[400px] h-fit p-[30px] mr-[60px] text-shadow-lg/100 text-shadow-black
                                    transition-all duration-800 ease-in-out peer-hover:translate-x-4 peer-hover:opacity-100 }`}>
                        <p className="whitespace-normal break-keep text-justify">
                            {projeto.descricao}
                        </p>
                    </div>
                </section>

            )}

        </div>
    )
}

export default Projects