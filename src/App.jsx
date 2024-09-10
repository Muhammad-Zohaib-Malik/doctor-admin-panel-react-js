import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Dashboard from "./component/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
