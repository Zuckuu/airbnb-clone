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
          country="(6) • USA"
          des1="From $136"
          des2=" / person"
        />
        <Card
          img={katie}
          cardDes="Life with Katie Zaferes"
          star={starPic}
          rating="5.0"
          country="(6) • USA"
          des1="From $136"
          des2=" / person"
        />
      </div>
    </div>
  );
}

export default App;
