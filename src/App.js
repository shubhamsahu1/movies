import "./App.css";
import Header from "./component/header/header";
import BodyWraper from "./component/bodyWraper/bodyWraper";
import Movies from "./component/movies/movies";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyWraper>
        <Movies />
      </BodyWraper>
    </div>
  );
}

export default App;
