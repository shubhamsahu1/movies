import "./App.css";
import Header from "./component/header/header";
import BodyWraper from "./component/bodyWraper/bodyWraper";
import Movies from "./component/movies/movies";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Loader from "./component/loader/loader";
import setUpInterceptor from "./api/axios/interceptor";

function App() {
  return (
    <Provider store={store}>
      <Loader />
      <div className="App">
        <Header />
        <BodyWraper>
          <Movies />
        </BodyWraper>
      </div>
    </Provider>
  );
}
setUpInterceptor(store);
export default App;
