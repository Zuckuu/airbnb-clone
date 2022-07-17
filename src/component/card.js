import "../App.css";


export default function Card(props) {
    return (
      <section className="card">
          <img src={props.img} className="picture" alt="" />
          <div className="rating">
            <img src={props.star} className="starPic" alt="" /> 
            <p className="ratingText">5.0 <span className="greyText">(6) • USA</span></p>
          </div>
          <div className="cardDesContainer">
            <p className="cardDes">{props.cardDes}</p>
          </div>
          <div>
            <p className="cardLastDes"> <span className="boldText">From $136</span> / person</p>
          </div>
      </section>
    );
  }
  