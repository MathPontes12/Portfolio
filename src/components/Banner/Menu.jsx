import Link from "next/link"
import MenuText from "./MenuText"


const Menu = () => {
    return(
        <nav className="flex fixed bg-black w-full justify-center gap-[80px] px-[70px] py-[24px] z-[50]">
                <Link href="/Main"> <MenuText> Início </MenuText> </Link>
                <Link href="/Skills" > <MenuText> Habilidades </MenuText> </Link>
                <Link href="/Project-Experience" > <MenuText> Projetos/Experiências </MenuText> </Link>
                <Link href="/Contact" > <MenuText> Contato </MenuText> </Link>
            </nav>
    )
}

export default Menu