import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Channels from "./pages/Channels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/channels" element={<Channels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
