import "../App.css";
import grip from "../asset/airbnb-photo1.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--photo" src={grip} alt="" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}
