import "./App.css";
import Header from "./component/header/header";
import BodyWraper from "./component/bodyWraper/bodyWraper";
import Movies from "./component/movies/movies";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <BodyWraper>
          <Movies />
        </BodyWraper>
      </div>
    </Provider>
  );
}

export default App;
