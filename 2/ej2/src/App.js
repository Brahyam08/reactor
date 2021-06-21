import "./App.css";

function App() {
  let patata = ["patata", "zanahoria", "calabacín"];
  function Supermercado(props) {
    return (
      <ul>
        <li>{props.verdura[0]}</li>
        <li>{props.verdura[1]}</li>
        <li>{props.verdura[2]}</li>
      </ul>
    );
  }

  return <Supermercado verdura={patata} />;
}

export default App;
