import "../App.css";
//import star from "../asset/red-star.png"


export default function Card(props) {
    return (
      <section className="card">
          <img src={props.img} className="picture" alt="" />
          <div className="rating">
            <img src={props.star} className="starPic" alt="" /> 
            <p className="ratingText">{props.rating} <span className="greyText">{props.country}</span></p>
          </div>
          <div className="cardDesContainer">
            <p className="cardDes">{props.cardDes}</p>
          </div>
          <div>
            <p className="cardLastDes"> <span className="boldText">{props.des1}</span>{props.des2}</p>
          </div>
      </section>
    );
  }
  