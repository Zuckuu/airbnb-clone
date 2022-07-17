import "../App.css";
//import star from "../asset/red-star.png"

export default function Card(props) {
  return (
    <section className="card">
      <img src={props.img} className="card--image" alt="" />
      <div className="card--stats">
        <img src={props.star} className="starPic" alt="" />
        <p className="ratingText">
          {props.rating} <span className="greyText">({props.reviewCount}) • {props.location}</span>
        </p>
      </div>
      <div className="cardDesContainer">
        <p className="cardDes">{props.title}</p>
      </div>
      <div>
        <p className="cardLastDes">
          {" "}
          <span className="boldText">From ${props.price}</span> / person
        </p>
      </div>
    </section>
  );
}
