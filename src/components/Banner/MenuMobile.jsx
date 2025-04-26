import Link from "next/link"
import LogoPerfil from "./Logo"
import MenuText from "./MenuText"


const MenuMobile = ({ clicarPraFechar }) => {
    return (
        <nav>
            <button>
                <img className="absolute top-[30px] left-[30px] w-[40px] h-auto" src="./images/banner/menuW.png" alt="botao de menu" />
            </button>

            <div className="fixed flex flex-col rounded-r-[20px] items-center bg-brancoCinza w-[200px] mt-[-24px] h-screen pt-[30px] gap-[100px]">
                <div className="flex w-full justify-evenly">
                    <LogoPerfil className="w-fit h-[70px]" />
                    <button onClick={() => clicarPraFechar()} className="pt-[5px]">
                        <img className=" w-[40px] h-auto" src="./images/banner/menuB.png" alt="botao de menu" />
                    </button>
                </div>
                
                <div className="flex flex-col items-center gap-[60px] pt-[20px]">
                    <Link href="/Main">
                        <MenuText clicarPraFechar={clicarPraFechar}> Início </MenuText>
                    </Link>

                    <Link href="/Skills" >
                        <MenuText clicarPraFechar={clicarPraFechar}> Habilidades </MenuText>
                    </Link>

                    <Link href="/Project-Experience" >
                        <MenuText clicarPraFechar={clicarPraFechar}> Projetos/<br />Experiências </MenuText>
                    </Link>

                    <Link href="/Contact" >                        
                        <MenuText clicarPraFechar={clicarPraFechar}> Contato </MenuText>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default MenuMobile