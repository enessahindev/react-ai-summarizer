import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/enessahindev")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        <span className="orange_gradient">OpenAI GPT-4 ile</span>
        <br className="max-md:hidden" /> Makaleleri özetleyin 
      </h1>
      <h2 className="desc">
        Uzun makaleleri net ve özlü özetlere dönüştüren açık kaynaklı bir makale
        özetleyici olan Summenzy ile okumanızı basitleştirin.
      </h2>
    </header>
  );
};

export default Hero;
