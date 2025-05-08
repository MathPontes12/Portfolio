import ButtonCard from "../Button/Button"


const MiniCard = ({ nome, url }) => {
    return (
        <div className="flex flex-col items-center xl:gap-[10px] gap-[20px]">
            <img className="xl:w-[200px] xl:h-[200px] w-[100px] h-[100px]" src={`./images/${nome}.webp`} alt="logo da rede social" />
            <ButtonCard nome={nome} url={url} className="bg-black xl:text-[15px] text-[10px]"/>
        </div>
    )
}

export default MiniCard