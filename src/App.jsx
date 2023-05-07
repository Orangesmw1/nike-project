import { Route, Routes } from "react-router-dom";
import "./App.css";
import NikeProject from "./Nike Project/NikeProject";
import HomePage from "./Nike Project/HomePage/HomePage";
import Detail from "./Nike Project/Detail/Detail";
import Bag from "./Nike Project/Bag/Bag";
import Login from "./Nike Project/Login/Login";
import Register from "./Nike Project/Register/Register";

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

          <Route
            path="/bag"
            element={
              <NikeProject>
                <Bag />
              </NikeProject>
            }
          />

          <Route
            path="/login"
            element={
              <NikeProject>
                <Login />
              </NikeProject>
            }
          />

          <Route
            path="/register"
            element={
              <NikeProject>
                <Register />
              </NikeProject>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
