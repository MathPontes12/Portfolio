
const Footer = ({ posicao }) => {

    return (
        <footer className={`bg-black w-full flex justify-center gap-[80px] py-[30px] xl:static relative z-10 ${posicao}`}>
            <p className="text-white text-center xl:text-[15px] text-[10px] opacity-50"> © 2025 Matheus Pontes - Todos os direitos reservados. </p>
        </footer>
    )
}

export default Footer