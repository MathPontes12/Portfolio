

const SkillCard = ({ nome, tipo }) => {
    return(
        <div className="flex items-center gap-[4px] w-fit h-fit bg-brancoCinza rounded-[70px] text-[10px] px-[10px] py-[4px]">
            <img className="w-fit h-[12px]" src={`./images/skills/${tipo}/${nome}.webp`} alt="logo da skill" />
            <p className="text-[11px] mt-[4px]">{nome}</p>
        </div>
    )
}

export default SkillCard