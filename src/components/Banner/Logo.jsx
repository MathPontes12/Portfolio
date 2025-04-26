

const LogoPerfil = ({ className }) => {
    return(
        <div className="flex xl:flex-col items-center gap-[20px] group">
                <img className={`${className}`}
                    src="/images/banner/perfil.png" alt="imagem perfil banner"
                />
                <div className="xl:block hidden bg-black text-brancoCinza py-[12px] 
                px-[20px] rounded-[70px] opacity-0 group-hover:opacity-100">
                    <a href="/Contact" className="hover:opacity-50 cursor-pointer">
                         Matheus Pontes 
                    </a>
                </div>
            </div>
    )
}

export default LogoPerfil