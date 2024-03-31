import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>our menu</h2>
      <img className="pizza" src="pizzas/focaccia.jpg" alt="pizza" />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  return <footer className="footer">{hour}we're currently open </footer>;
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Menu />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
