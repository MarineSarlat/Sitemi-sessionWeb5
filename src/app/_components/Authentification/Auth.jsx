"use client";
import "./Auth.css";
import AuthLoginForm from "./AuthLoginForm";
import AuthSignupForm from "./AuthSignupForm";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="Auth">

      <div className="auth-onglets">
        <button
          onClick={() => setIsLogin(true)}
          type="button"
          className={`auth-onglet ${isLogin ? "active" : ""}`}
        >
          Connexion
        </button>
        <button
          onClick={() => setIsLogin(false)}
          type="button"
          className={`auth-onglet ${!isLogin ? "active" : ""}`}
        >
          Inscription
        </button>
      </div>

      {isLogin ? <AuthLoginForm /> : <AuthSignupForm />}
    </div>
  );
};
export default Auth;