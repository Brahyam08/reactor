import "./App.css";
import garaje from "./garaje";
import Coche from "./Coche";

function App() {
  const mostrarGaraje = garaje.map((coche, index) => {
    return (
      <Coche
        index={index}
        altura={coche.altura}
        longitud={coche.longitud}
        ruedas={coche.ruedas}
        color={coche.color}
      />
    );
  });
  return mostrarGaraje;
}

export default App;
