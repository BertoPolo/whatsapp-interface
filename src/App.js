import React from "react";
import Login from "./components/Login/login.jsx";
import Register from "./components/Register/Register.jsx";
import NotFound from "./components/Not_Found/Not_Found.jsx";
import ChatBox from "./components/Chat/ChatBox.jsx";
import Settings from "./components/Settings/Settings.jsx";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Chat" element={<ChatBox />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
