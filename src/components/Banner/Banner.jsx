import Link from "next/link"
import MenuText from "./MenuText"


const Banner = () => {
    return (

        <header className="flex items-center justify-center my-[30px] gap-[80px]">
            <div className="flex flex-col items-center xl:gap-[20px] group">
                <img className="xl:w-auto xl:h-[108px]"
                    src="/images/banner/perfil.png" alt="imagem perfil banner"
                />
                <div className="bg-black text-brancoCinza xl:py-[12px] 
                xl:px-[20px] rounded-[70px] opacity-0 group-hover:opacity-100">
                    <a href="/Contact" className="hover:opacity-50 cursor-pointer">
                         Matheus Pontes 
                    </a>
                </div>
            </div>
            <nav className="flex bg-black rounded-[70px] xl:gap-[110px] xl:px-[70px] xl:py-[23px] mt-[-60px]">
                <Link href="/Main"> <MenuText texto="Início" /> </Link>
                <Link href="/Skills" > <MenuText texto="Habilidades" /> </Link>
                <Link href="/Project-Experience" > <MenuText texto="Projetos/Experiências" /> </Link>
                <Link href="/Contact" > <MenuText texto="Contatos" /></Link>
            </nav>
        </header>
    )
}

export default Banner