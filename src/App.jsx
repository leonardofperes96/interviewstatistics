import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="landing" element={<Landing />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
