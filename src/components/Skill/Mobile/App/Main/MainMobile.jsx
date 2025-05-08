import MobileButtons from "../../MobileButtons"
import AppIcons from "../AppIcons"


const MainMobile = ({ AoClicar, aoClicarEmVoltar }) => {
    return (
        <div className="bg-[url(/images/bgmob.webp)] bg-cover h-[597px] flex flex-col items-center">
            <div className="relative flex rounded-[20px] gap-[9px] mt-[130px] mr-[20px]">
                <AppIcons AoClicarNoApp={AoClicar} icone="F" nome="Front-end" className="bg-azulEscuro text-brancoCinza" />
                <AppIcons AoClicarNoApp={AoClicar} icone="B" nome="Back-end" className="bg-brancoCinza text-black" />

            </div>
            <MobileButtons aoClicarEmVoltar={aoClicarEmVoltar} color="W"/>
        </div>
    )
}

export default MainMobile