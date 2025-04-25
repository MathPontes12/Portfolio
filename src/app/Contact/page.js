import Card from "@/components/Cards/Card"
import MiniCard from "@/components/Cards/MiniCard"
import Titles from "@/components/Titles/Titles"


const ContactPage = () => {
    return(
        <div className="flex flex-col items-center mb-[80px] xl:mt-[0] mt-[70px]">
            <Titles titulo="Contato" />
            <Card className="xl:w-[800px] xl:h-[420px] w-[300px] h-[fit] bg-black"
            classH1="bg-brancoCinza text-[20px] p-[30px]"
            titulo="Me acompanhe nas redes sociais!">
            
                <section className="flex xl:flex-row flex-col xl:gap-[0] gap-[30px] xl:py-[0] py-[30px] items-center justify-evenly w-full h-full">
                    <MiniCard nome="Instagram" url="https://www.instagram.com/math_pontes/"/>
                    <MiniCard nome="Linkedin" url="https://www.linkedin.com/in/matheus-pontes-2b352b2bb/"/>
                    <MiniCard nome="Github" url="https://github.com/MathPontes12"/>
                </section>

            </Card>
           
            
            
        </div>
    )
}

export default ContactPage