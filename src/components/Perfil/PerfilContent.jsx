import { useEffect, useState } from "react";


const PerfilContent = () => {
    
    const [expandir, setExpandir] = useState(false);
    
        useEffect(() => {
          setTimeout(() => setExpandir(true));
        }, []);

    return (
        <div className="flex justify-evenly">

            <img className={`w-fit h-[300px] transition-all duration-800 ease-in-out ${
        expandir ? "pr-[0px]" : "pr-[500px]"}`} 
        src="./images/Perfil.png" 
        alt="imagem do perfil" />
        
            <section className="flex flex-col gap-[70px]">
                <h1 className="text-brancoCinza text-[32px]">Oi, eu sou o Matheus</h1>
                <article className="ml-[150px]">
                    <p className="text-brancoCinza text-[20px] leading-[40px]">
                        Formado em Ciências da Computação. <br/>
                        Atualmente, Desenvolvedor Full-Stack.
                    </p>
                </article>
            </section>

        </div>
    )
}

export default PerfilContent