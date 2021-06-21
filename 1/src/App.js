//Estilo y recursos gráficos
import "./App.css";

//JS Servicio
import videoclub from "./videoclub";

//Modulos:
import Cabecera from "./Cabecera";
import Footer from "./Footer";
import Peliculas from "./Peliculas";

function App() {
  return (
    <>
      <Cabecera />
      <Peliculas videoclubProps={videoclub} />
      <Footer />
    </>
  );
}

export default App;
