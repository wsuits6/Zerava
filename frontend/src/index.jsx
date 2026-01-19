import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import "./App.css";

// Initialize dark theme by default
try {
  if (!document.documentElement.getAttribute('data-theme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
} catch (error) {
  console.error('Error setting theme:', error);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
