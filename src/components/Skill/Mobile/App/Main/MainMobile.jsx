import MobileButtons from "../../MobileButtons"
import AppIcons from "../AppIcons"


const MainMobile = ({ AoClicar, aoClicarEmVoltar }) => {
    return (
        <>
            <div className="bg-[url(/images/bg-mob.png)] bg-cover flex h-full w-full rounded-[20px] pt-[100px] px-[10px] gap-[9px]">
                <AppIcons AoClicarNoApp={AoClicar} icone="F" nome="Front-end" className="bg-azulEscuro text-brancoCinza" />
                <AppIcons AoClicarNoApp={AoClicar} icone="B" nome="Back-end" className="bg-brancoCinza text-black" />

            </div>
            <MobileButtons aoClicarEmVoltar={aoClicarEmVoltar} color="W" />
        </>
    )
}

export default MainMobile