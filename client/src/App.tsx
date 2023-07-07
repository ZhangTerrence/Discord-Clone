import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Channels from "./pages/Channels/Channels";
import Personal from "./pages/Channels/Personal/Personal";
import Friends from "./pages/Channels/Personal/Friends";
import DirectMessages from "./pages/Channels/Personal/DirectMessages";
import Guild from "./pages/Channels/Guild/Guild";
import NotFound from "./pages/NotFound";

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
