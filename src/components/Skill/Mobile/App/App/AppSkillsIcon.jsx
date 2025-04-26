

const AppSkillsIcon = ({ nome, tipo }) => {
    return (
        <div className="flex flex-col items-center gap-[4px] w-fit h-fit px-[10px] py-[4px]">
            <img className="bg-brancoCinza p-[5px] w-auto h-[35px] rounded-[8px]" src={`./images/skills/${tipo}/${nome}.png`} alt="icone app" />
            <p className="mt-[4px] text-[11px]">{nome}</p>
        </div>
    )
}

export default AppSkillsIcon