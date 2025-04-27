import Link from "next/link"
import LogoPerfil from "./Logo"
import MenuText from "./MenuText"
import MenuMobileButtons from "./MenuMobileButtons"


const MenuMobile = ({ clicarPraFechar }) => {
    return (
        <nav>
            <button>
                <img className="absolute top-[30px] left-[30px] w-[40px] h-auto" src="./images/banner/menuW.webp" alt="botao de menu" />
            </button>

            <div className="fixed flex flex-col rounded-r-[20px] items-center bg-brancoCinza w-[200px] mt-[-24px] h-screen pt-[30px] gap-[100px]">
                <div className="flex w-full justify-evenly">
                    <LogoPerfil className="w-fit h-[70px]" />
                    <button onClick={() => clicarPraFechar()} className="pt-[5px]">
                        <img className=" w-[40px] h-auto" src="./images/banner/menuB.webp" alt="botao de menu" />
                    </button>
                </div>
                
                <div className="flex flex-col items-center gap-[60px] pt-[20px]">
                    <Link href="/Main">
                        <MenuMobileButtons clicarPraFechar={clicarPraFechar}> Início </MenuMobileButtons>
                    </Link>

                    <Link href="/Skills" >
                        <MenuMobileButtons clicarPraFechar={clicarPraFechar}> Habilidades </MenuMobileButtons>
                    </Link>

                    <Link href="/Project-Experience" >
                        <MenuMobileButtons clicarPraFechar={clicarPraFechar}> Projetos/<br />Experiências </MenuMobileButtons>
                    </Link>

                    <Link href="/Contact" >                        
                        <MenuMobileButtons clicarPraFechar={clicarPraFechar}> Contato </MenuMobileButtons>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default MenuMobile