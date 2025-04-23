
const Card = ({ titulo, children, className, classH1 }) => {
    return (
        <div className={`flex flex-col ${className} rounded-b-[40px] rounded-t-[40px]`}>
            <h1 className={`${classH1} flex items-center justify-center rounded-t-[40px] w-full h-fit text-center `}>
                {titulo}
            </h1>
            {children}
        </div>
    )
}

export default Card