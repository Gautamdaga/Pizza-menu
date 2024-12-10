import React from "react";
import ReactDOM from "react-dom/client";

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

function App(props) {
  return (
    <div>
      <h1>Hello React!</h1>
      {props.pizzaData.map((el) => (
        <Pizza Pizza={el} />
      ))}
      {/* <Pizza Pizza={props.pizzaData[0]} /> */}
    </div>
  );
}

function Pizza(props) {
  const data = props.Pizza.name.split(" ");
  const name = data[1] ?? data[0];
  return (
    <div>
      <img src={`pizzas\\${name}.jpg`} alt="Pizza Spinaci" />
      <h2>{props.Pizza.name}</h2>
      <p>{props.Pizza.ingredients}</p>
      <p>Price : ${props.Pizza.price}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App pizzaData={pizzaData} />
  </React.StrictMode>
);

// before react v18
// ReactDOM.render() was used instead of root.render
