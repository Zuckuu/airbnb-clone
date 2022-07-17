import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";
import starPic from "./asset/red-star.png";
import katie from "./asset/Katie-Zaferes-pic.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-Container">
        <Card
          img={katie}
          cardDes="Life with Katie Zaferes"
          star={starPic}
          rating="5.0"
          viewCount = {6}
          country="USA"
          price="136"
        />
        <Card
          img={katie}
          cardDes="Life with Katie Zaferes"
          star={starPic}
          rating="4.9"
          viewCount = {10}
          country="JAPAN"
          price="196"
        />
      </div>
    </div>
  );
}

export default App;
