

const AppIcons = ({ icone, nome, className, AoClicarNoApp }) => {
    return(
        <button className="flex flex-col items-center gap-[5px]" onClick={() => AoClicarNoApp(nome)}>
            <div className={`text-[20px] rounded-[8px] ${className}  w-fit h-fit px-[10px] pt-[8px]`}>
                {icone}
            </div>
            <p className="text-[10px] font-bold">
                {nome}
            </p>
        </button>
    )
}

export default AppIcons