import MiniCard from "@/components/Cards/MiniCard"
import Footer from "@/components/Footer/Footer"

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center xl:mt-[20px] justify-center gap-[20px] xl:pt-[0] ">
            <div className="flex justify-center items-center bg-[url(/images/comentarios.png)] bg-cover 
            xl:w-[500px] xl:h-[440px] w-[320px] h-[340px] xl:mr-0 mr-[50px] pt-[20px] ">
                <p className="xl:text-[24px] text-[18px] xl:pb-0 pb-[40px] text-center font-bold">
                    Me acompanhe <br/> nas <br/> redes sociais!
                </p>
            </div>

            <section className="flex xl:gap-[40px] gap-[20px] xl:pb-[70px] 
            items-center justify-center w-full h-full">
                <MiniCard nome="Instagram" url="https://www.instagram.com/math_pontes/" />
                <MiniCard nome="Linkedin" url="https://www.linkedin.com/in/matheus-pontes-2b352b2bb/" />
                <MiniCard nome="Github" url="https://github.com/MathPontes12" />
            </section>
            <Footer posicao="top-[70px]"/>
        </div>
    )
}

export default ContactPage