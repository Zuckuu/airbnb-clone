import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="./asset/Katie-Zaferes-pic.jpg"
        cardDes="Life with Katie Zaferes"
        star = "./asset/red-star.png"
      />
    </div>
  );
}

export default App;
