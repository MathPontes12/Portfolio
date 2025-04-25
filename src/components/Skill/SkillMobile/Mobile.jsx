import AppIcons from "./App/AppIcons"


const Mobile = () => {
    return (
        <div className="bg-[url(/images/bg-mob.png)] bg-cover w-[280px] h-[570px]">
            <div className="flex mt-[150px] ml-[30px] gap-[8px]">
                <AppIcons icone="F" nome="Front-end" />
                <AppIcons icone="B" nome="Back-end" />
            </div>
        </div>
    )
}

export default Mobile