import NavbarComponent from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";

// import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CardComponent price={200} title='Slika na prodaju'/>
    </div>
  );
}

export default App;
