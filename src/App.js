import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ProductDetails } from "./Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
