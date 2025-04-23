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
        <div className="absolute flex items-center bottom-0 bg-azultaskbar w-full h-[35px]" >
            <img className="px-[16px]" src="/images/react-icon.png" />
            <div className="border-x-[1px] w-[150px] h-full flex items-center pl-[5px] bg-brancoCinza opacity-50">
                <img className="w-auto h-[20px]" src="./images/Lupa.png" alt="icone de lupa" />
            </div>
            <img className="w-auto h-[30px] pl-[470px] pr-[5px]" src="./images/wifi.png" alt="icone de wifi" />
            <div className="fex flex-col text-[9px] text-center mt-[2px]">
                <p> {horaAtual(DataHora)} </p>
                <p> {dataAtual(DataHora)} </p>
            </div>
        </div>
    )
}

export default TaskBar