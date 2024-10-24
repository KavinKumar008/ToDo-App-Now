import React from "react";
import TodoPage from "./component1/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./frontpage/FirstPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/todoPage" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
