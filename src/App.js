import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import starPic from "./asset/red-star.png";
import data from "./data.js"
//console.log(data)

function App() {
  const cards = data.map((item)=>{
    return (
      <Card
          img={item.coverImg}
          rating = {item.stats.rating}
          title = {item.title}
          star={starPic}
          location = {item.location}
          reviewCount={item.stats.reviewCount}
          price={item.price}
          openSpots = {item.openSpots}
        />
    )
  })



  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-Container">
        {cards}
      </div>
    </div>
  );
}

export default App;
