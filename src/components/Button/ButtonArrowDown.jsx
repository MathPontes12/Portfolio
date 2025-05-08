
const ScrollDownButton = () => {

  const scrollToSection = () => {
    window.scrollTo({
        // desce o scroll
      top: window.innerHeight,
        // desce lentamente
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToSection}
      className="flex justify-center relative z-10 animate-bounce cursor-pointer xl:mt-[15px] mt-[7px]"
    >
      <img className="w-auto xl:h-[70px] h-[50px]" src="./images/white-double-arrow.png" alt="botao seta pra baixo"/>
    </button>
  );
};

export default ScrollDownButton;
