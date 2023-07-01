import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Channels from "./pages/Channels";
import Personal from "./pages/Personal";
import Friends from "./pages/Friends";
import Guild from "./pages/Guild";
import NotFound from "./pages/NotFound";
import DirectMessages from "./pages/DirectMessages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="channels" element={<Channels />}>
          <Route path="@me" element={<Personal />}>
            <Route path="" element={<Friends />} />
            <Route path=":id" element={<DirectMessages />} />R
          </Route>
          <Route path=":id" element={<Guild />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
