import "../App.css";
import katie from "../asset/Katie-Zaferes-pic.jpg"
import star from "../asset/red-star.png"


export default function Card() {
    return (
      <section className="card">
          <img src={katie} className="picture" alt="" />
          <div className="rating">
            <img src={star} alt="" /> 5.0 <span className="greyText">(6) * USA</span>
          </div>
          <div>
            <p>Life lessons with Katie Zaferes</p>
          </div>
          <div>
            <p> <span className="boldText">From $136</span> / person</p>
          </div>
      </section>
    );
  }
  