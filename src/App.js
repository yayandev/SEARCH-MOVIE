import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import DetailMovie from "./pages/DetailMovie";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
