import ButtonCard from "../Button/Button"


const MiniCard = ({ nome, url }) => {
    return (
        <div className="flex xl:flex-col items-center xl:gap-[40px] gap-[40px]">
            <img className="w-[60px] h-[60px]" src={`./images/${nome}.png`} alt="logo da rede social" />
            <ButtonCard nome={nome} url={url} className="bg-azulEscuro xl:text-[15px] text-[12px]"/>
        </div>
    )
}

export default MiniCard