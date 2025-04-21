import Link from "next/link"
import MenuText from "./MenuText"


const Banner = () => {
    return (

        <header className="flex items-center justify-center my-[31px] gap-[80px]">
            <div className="flex flex-col items-center xl:gap-[20px]">
                <img className="xl:w-auto xl:h-[108px] peer"
                    src="/images/banner/perfil.png" alt="imagem perfil banner"
                />
                <div className="bg-black text-brancoCinza xl:py-[12px] xl:px-[20px] rounded-[70px] opacity-0 peer-hover:opacity-100">
                    <p> Matheus Pontes </p>
                </div>
            </div>
            <nav className="flex bg-black rounded-[70px] xl:gap-[110px] xl:px-[70px] xl:py-[23px] mt-[-60px]">
                <Link href="/Main"> <MenuText texto="Início" /> </Link>
                <Link href="/Skills" > <MenuText texto="Habilidades" /> </Link>
                <MenuText texto="Projetos" />
                <MenuText texto="Experiências" />
                <Link href="/Contact" > <MenuText texto="Contatos" /></Link>
            </nav>
        </header>
    )
}

export default Banner