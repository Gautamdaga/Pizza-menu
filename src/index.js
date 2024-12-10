import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  //   const data = props?.Pizza?.name?.split(" ");
  //   const name = data[1] ?? data[0] ?? "Spinaci";
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>Price : ${props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const pizzaLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaLength > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please comeback later :)</p>
      )}
    </main>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hours >= openHour && hours <= closeHour;
  //   console.log(isOpen);
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>
            We're open to serve till {closeHour}:00. Come visit us or Order
            online !
          </p>
        ) : (
          <p>
            We're happy to welcome you from {openHour}:00 to {closeHour}:00.
          </p>
        )}
        <button className="btn">Order Now</button>
      </div>
    </footer>
  );
  //   return React.createElement("Footer", null, "We're currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react v18
// ReactDOM.render() was used instead of root.render
