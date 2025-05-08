

const Titles = ({ titulo, responsividade }) => {
    return(
        <h1 className={`flex text-[26px] place-self-center text-brancoCinza text-shadow-lg/100 text-shadow-black ${responsividade}`}>
            - {titulo} -
        </h1>
    )
}

export default Titles