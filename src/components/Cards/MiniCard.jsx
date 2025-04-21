

const MiniCard = ({ nome, url }) => {
    return (
        <div className="flex flex-col items-center gap-[40px]">
            <img className="w-[80px] h-[80px]" src={`./images/${nome}.png`} alt="logo da rede social" />
            <a href={url} className="text-brancoCinza bg-azulEscuro text-shadow-lg/100 text-shadow-black
            rounded-[70px] border-[1px] border-brancoCinza shadow-[2px_2px_rgba(0,0,0,0.25)] shadow-brancoCinza
            transition-all duration-200 hover:translate-1 hover:shadow-none cursor-pointer
            px-[20px] py-[12px]" target="_blank" rel="noopener noreferrer">
                {nome}
            </a>
        </div>
    )
}

export default MiniCard