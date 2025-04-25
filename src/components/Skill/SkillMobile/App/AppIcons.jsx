

const AppIcons = ({ icone, nome }) => {
    return(
        <div className="flex flex-col items-center gap-[5px]">
            <div className="text-[20px] rounded-[8px] bg-azulEscuro text-brancoCinza w-fit h-fit px-[10px] pt-[8px]">
                {icone}
            </div>
            <p className="text-[9.5px] font-bold">
                {nome}
            </p>
        </div>
    )
}

export default AppIcons