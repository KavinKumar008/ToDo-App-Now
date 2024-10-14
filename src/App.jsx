import React from "react";
import TodoPage from "./component1/TodoPage";
import LoginPage from "./loginpage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
