import Create from "./components/Create";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import "../src/components/overall.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
