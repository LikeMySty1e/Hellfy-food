import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  return <div className="root">
      <BrowserRouter>
          <ErrorMessage />
          <NavBar />
          <AppRouter />
      </BrowserRouter>
  </div>;
}

export default App;
