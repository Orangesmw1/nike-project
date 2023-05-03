import { Route, Routes } from "react-router-dom";
import "./App.css";
import NikeProject from "./Nike Project/NikeProject";
import HomePage from "./Nike Project/HomePage/HomePage";
import Detail from "./Nike Project/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <NikeProject>
                <HomePage />
              </NikeProject>
            }
          />

          <Route
            path="/detail/:id"
            element={
              <NikeProject>
                <Detail />
              </NikeProject>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
