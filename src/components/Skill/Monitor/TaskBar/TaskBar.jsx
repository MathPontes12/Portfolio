import { useEffect, useState } from "react";


const TaskBar = () => {

    const [DataHora, setDataHora] = useState(new Date());

    //setInterval atualiza o estado dateTime a cada segundo (1000ms).
    //O return () => clearInterval(intervalo) é usado para limpar o intervalo quando o componente for destruído (mudança de tela), 
    //evitando que o timer continue rodando em segundo plano.
    useEffect(() => {
        const intervalo = setInterval(() => setDataHora(new Date()), 1000);
        return () => clearInterval(intervalo);
    }, []);

    const dataAtual = (data) => data.toLocaleDateString("pt-BR");

    const horaAtual = (data) => data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="absolute flex items-center bottom-[-41px] left-[373px] w-fit h-[35px] gap-[4px]" >
            <img className="w-auto h-[15px] " src="./images/wifi.webp" alt="icone de wifi" />
            <div className="fex flex-col text-[6px] text-center mt-[2px]">
                <p> {horaAtual(DataHora)} </p>
                <p> {dataAtual(DataHora)} </p>
            </div>
        </div>
    )
}

export default TaskBar