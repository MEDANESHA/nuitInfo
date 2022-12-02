import Header from "@components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        {/* Doc For other pages */}
        {/* <Route path="/page" element={<Page />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
