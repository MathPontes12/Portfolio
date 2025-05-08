import Titles from "../Titles/Titles"


const Sobre = () => {
    return (
        <section className="flex flex-col items-center xl:mt-[120px] mt-[30px] gap-[70px]">
            <Titles titulo="Sobre" />
            <p className="whitespace-normal break-keep text-justify xl:text-[20px] text-[16px] text-brancoCinza xl:px-[200px] px-[30px] leading-[40px]">
            Em dezembro de 2025 me formei em Ciências da Computação pela Estácio, desde então venho 
            focado em projetos com desenvolvimento web, com páginas dinâmicas 
            e responsivas, navegação, uso de bibliotecas React e boas práticas de código.
            Atualmente, venho explorando a área back-end, com criação de API's e integração com banco de dados.
            </p>
            <h1 className="xl:text-[32px] text-[24px] font-bold text-center text-brancoCinza text-shadow-lg/100 text-shadow-black
            xl:px-[200px] px-[30px] leading-[40px] ">
                Fique a vontade pra navegar e conhecer um pouco mais do meu trabalho! 
            </h1>
            <img className="w-auto xl:h-[150px] h-[100px]" src="./images/Emoticon.gif" alt="imagem do emoticon" />
        </section>
    )
}

export default Sobre