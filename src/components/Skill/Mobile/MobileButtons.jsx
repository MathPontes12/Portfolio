

const MobileButtons = ({ aoClicarEmVoltar, color }) => {
    return (
        <div className="flex place-content-center gap-[65px] pt-[375px] pl-[20px]">
            <img className="w-[10px] h-[12px]" src={`./images/mobile/inicio${color}.webp`} alt="botao inicio" />
            <img className="w-[12px] h-[12px]" src={`./images/mobile/menu${color}.webp`} alt="botao menu" />
            <button onClick={() => aoClicarEmVoltar()}>
                <img className="w-[14px] h-[12px]" src={`./images/mobile/voltar${color}.webp`} alt="botao voltar" />
            </button>
        </div>
    )
}

export default MobileButtons