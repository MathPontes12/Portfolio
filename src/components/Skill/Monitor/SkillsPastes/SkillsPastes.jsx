

const SkillsPastes = ({ texto, aoClicar }) => {
    return (
            <button onClick={() => aoClicar(texto) } 
            className="flex flex-col items-center p-[5px] hover:bg-[rgba(255,255,255,0.2)] focus:bg-[rgba(255,255,255,0.2)]">
                <img className="w-fit h-[35px] cursor-pointer" src="/images/paste-icon.webp" alt="icone de pasta" />
                <p className="text-[10px] text-brancoCinza text-shadow-black text-shadow-lg/40 font-bold"> {texto} </p>
            </button>
    )
}

export default SkillsPastes