function Coche(props) {
  return (
    <div key={props.index}>
      <p>{props.altura}</p>
      <p>{props.longitud}</p>
      <p>{props.ruedas}</p>
      <p>{props.color}</p>
    </div>
  );
}

export default Coche;
