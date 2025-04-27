import { useEffect, useState } from "react";


const PerfilContent = () => {
    
    const [expandir, setExpandir] = useState(false);
    
        useEffect(() => {
          setTimeout(() => setExpandir(true));
        }, []);

    return (
        <div className="flex xl:flex-row flex-col items-center justify-evenly">

            <img className={`w-fit xl:h-[300px] h-[180px] transition-all duration-800 ease-in-out ${
                            expandir ? "pr-[0px]" : "xl:pr-[500px] pr-[0px]"}`} 
                            src="./images/Perfil.webp" 
                            alt="imagem do perfil" />
        
            <section className="flex flex-col xl:items-start items-center xl:mt-0 mt-[60px] xl:gap-[70px] gap-[50px]">
                <h1 className="text-brancoCinza xl:text-[32px] text-[26px] text-shadow-lg/100 text-shadow-black">
                Oi, eu sou o Matheus
                </h1>
                <article className="xl:ml-[150px] ml-0">
                    <p className="text-brancoCinza xl:px-0 px-[30px] xl:text-[20px] text-[16px] xl:text-start text-center leading-[40px]">
                        Formado em Ciências da Computação em 2025. <br/>
                        Atualmente, Desenvolvedor Full-Stack.
                    </p>
                </article>
            </section>
            
        </div>
        
    )
}

export default PerfilContent