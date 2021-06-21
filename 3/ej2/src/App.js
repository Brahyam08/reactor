import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

function Gatos() {
  const [gatos, setGatos] = useState([
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg",
    "https://i.insider.com/5b8407d03cccd122058b4580?width=1100&format=jpeg&auto=webp",
  ]);

  return gatos.map((gato, index) => {
    return <img src={gato} alt={index} />;
  });
}

function Perros() {
  const [perros, setPerros] = useState([
    "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
    "https://www.cesarsway.com/wp-content/uploads/2019/10/AdobeStock_190562703.jpeg",
    "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webp",
  ]);

  return perros.map((perro, index) => {
    return <img src={perro} alt={index} />;
  });
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/gatos">Gatos</Link>
      <Link to="/perros">Perros</Link>
      <Route path="/gatos">
        <Gatos />
      </Route>
      <Route path="/perros">
        <Perros />
      </Route>
    </BrowserRouter>
  );
}

export default App;
