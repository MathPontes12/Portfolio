import MiniCard from "./MiniCard"


const Card = () => {
    return (
        <div className="flex flex-col items-center bg-black w-[800px] h-[420px] rounded-b-[40px] rounded-t-[40px]">
            <h1 className="bg-brancoCinza flex items-center justify-center rounded-t-[40px] w-full h-[102px] text-center text-[28px]">
                Me acompanhe nas redes sociais!
            </h1>
            <section className="flex items-center justify-evenly w-full h-full">
                <MiniCard nome="Instagram" url="https://www.instagram.com/math_pontes/"/>
                <MiniCard nome="Linkedin" url="https://www.linkedin.com/in/matheus-pontes-2b352b2bb/"/>
                <MiniCard nome="Github" url="https://github.com/MathPontes12"/>
            </section>
        </div>
    )
}

export default Card