import "./Hero.css";
import background from "../../assets/background.jpeg";
import logo from "../../assets/logo.png";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-content">
        <img src={logo} alt="Logo da Loja" className="hero-logo" />
      </div>
    </section>
  );
}

export default Hero;
