function Peliculas(props) {
  const catalogo = props.videoclubProps.peliculas.map((pelicula, index) => {
    return (
      <Tarjeta
        index={index}
        cartel={pelicula.cartel}
        titulo={pelicula.titulo}
        sinopsis={pelicula.sinopsis}
      />
    );
  });

  function Tarjeta(props) {
    return (
      <div key={props.index} className="card">
        <img src={props.cartel} alt={props.titulo} />
        <div className="container">
          <h4>{props.titulo}</h4>
          <p>{props.sinopsis}</p>
        </div>
      </div>
    );
  }

  return (
    <div key="peliculas" className="catalogo">
      {catalogo}
    </div>
  );
}

export default Peliculas;
