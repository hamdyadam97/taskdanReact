import "./App.css";
import React, { useEffect } from "react";
import RegisterForm from "./Components/User/RegisterForm";
import VerifyEmail from "./Components/User/VerifyEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/User/Login";
import { useDispatch } from "react-redux";
import { checkUser } from "./Slice/auth";
import SignupForm from "./Components/User/SignupForm";
import Confirmation from "./Components/User/Confirmation";
import Dashboard from "./Components/Dashboard/main";
import ProtectedRoute from "./Components/Dashboard/ProtectedRoute";
import UserGrid from "./Components/Dashboard/UserGrid";
import MotoStats from "./Components/Dashboard/MotoStats";
import UserSection from "./Components/Dashboard/UserSection";
import Settings from "./Components/Dashboard/Settings";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUser());
  // }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<RegisterForm />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserGrid />
                </ProtectedRoute>
              }
            />
            <Route
              path="/moto-stats"
              element={
                <ProtectedRoute>
                  <MotoStats />
                </ProtectedRoute>
              }
            />
            <Route path="/users" element={<UserSection />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
