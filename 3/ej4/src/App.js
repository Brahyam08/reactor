import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

import plantilla from "./plantilla";
import Equipo from "./Equipo";
import Jugador from "./Jugador";

function App() {
  const rutas = plantilla.map((jugador, index) => {
    return (
      <Route path={"/" + jugador.apodo}>
        <Jugador
          key={index}
          full={true}
          nombre={jugador.nombre}
          apodo={jugador.apodo}
          altura={jugador.altura}
          peso={jugador.peso}
          nacionalidad={jugador.nacionalidad}
          edad={jugador.edad}
          foto={jugador.foto}
        />
      </Route>
    );
  });

  return (
    <BrowserRouter>
      <Route path="/equipo">
        <div className="catalogo">
          <Equipo plantilla={plantilla} />
        </div>
      </Route>
      {rutas}
    </BrowserRouter>
  );
}

export default App;
