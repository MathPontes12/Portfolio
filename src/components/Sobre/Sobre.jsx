import Titles from "../Titles/Titles"


const Sobre = () => {
    return (
        <section className="flex flex-col items-center">
            <Titles titulo="Sobre" />
            <p className="whitespace-normal break-keep text-justify text-[20px] text-brancoCinza px-[200px] leading-[40px]">
            Em dezembro de 2025 me formei em Ciências da Computação pela Estácio, desde então venho 
            focado em projetos com desenvolvimento web, com páginas dinâmicas 
            e responsivas, navegação, uso de bibliotecas React e boas práticas de código.
            Atualmente, venho explorando a área back-end, com criação de API's e integração com banco de dados.
            </p>
            <h1 className="text-[32px] text-center text-brancoCinza px-[200px] leading-[40px] mt-[100px] mb-[60px]">
                Fique a vontade pra navegar e conhecer um pouco mais do meu trabalho! 
            </h1>
            <img className="w-auto h-[150px]" src="./images/Emoticon.gif" alt="imagem do emoticon" />
        </section>
    )
}

export default Sobre