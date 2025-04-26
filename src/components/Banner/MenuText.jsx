

const MenuText = ({ children, clicarPraFechar }) => {
    return(
        <button onClick={() => clicarPraFechar()} className="xl:text-brancoCinza text-azulEscuro xl:text-[16px] text-center text-[16px] hover:opacity-50">
            {children}
        </button>
    )
}

export default MenuText