import Link from "next/link"
import MenuText from "./MenuText"


const Menu = () => {
    return(
        <nav className="flex bg-black rounded-[70px] gap-[110px] px-[70px] p-[10px] py-[23px] mt-[-60px]">
                <Link href="/Main"> <MenuText> Início </MenuText> </Link>
                <Link href="/Skills" > <MenuText> Habilidades </MenuText> </Link>
                <Link href="/Project-Experience" > <MenuText> Projetos/Experiências </MenuText> </Link>
                <Link href="/Contact" > <MenuText> Contato </MenuText> </Link>
            </nav>
    )
}

export default Menu