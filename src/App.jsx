import { Route, Routes } from "react-router-dom";
import "./App.css";
import NikeProject from "./Nike Project/NikeProject";
import HomePage from "./Nike Project/HomePage/HomePage";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
