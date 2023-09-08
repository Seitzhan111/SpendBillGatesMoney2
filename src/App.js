import React from "react";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
        <BrowserRouter>
            <Routes>
                <Route path="auth" element={<Auth/>}/>
                <Route path="" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
