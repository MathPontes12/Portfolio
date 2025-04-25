

const ButtonCard = ({ nome, url, className }) => {
    return (
        <a href={url}
            className={`text-brancoCinza ${className} text-shadow-lg/100 text-shadow-black
            rounded-[70px] border-[1px] border-brancoCinza shadow-[1.5px_1.5px_rgba(0,0,0,0.25)] shadow-brancoCinza
            transition-all duration-200 hover:translate-1 hover:shadow-none cursor-pointer
            px-[20px] py-[12px]`} target="_blank" rel="noopener noreferrer">
            {nome}
        </a>
    )
}

export default ButtonCard