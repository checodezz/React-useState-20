import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [currType, setCurrType] = useState("");
  const [delivery, setDelivery] = useState("");
  const [instructions, setInstructions] = useState("");
  const [formData, setFormData] = useState(false);

  const toppingsHandler = (event) => {
    let value = event.target.value;
    if (value) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping != value));
    }
  };

  const typeHandler = (event) => {
    setCurrType(event.target.value);
  };

  const deliveryHandler = (event) => {
    setDelivery(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setFormData(true);
  };
  return (
    <main>
      <h1>Pizza Order Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Customer Name: </label>
        <input
          id="name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="size">Choose Pizza Size:</label>
        <select
          id="size"
          required
          onChange={(event) => setSize(event.target.value)}
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings: </label>
        <br />

        <label>
          <input type="checkbox" value="Pepperoni" onChange={toppingsHandler} />
          Pepperoni
        </label>
        <br />
        <label>
          <input type="checkbox" value="Mushrooms" onChange={toppingsHandler} />
          Mushrooms
        </label>
        <br />
        <label>
          <input type="checkbox" value="Olives" onChange={toppingsHandler} />
          Olives
        </label>

        <br />
        <br />
        <label>Choose Crust Type:</label>
        <br />
        <label>
          <input
            type="radio"
            required
            value="Thin"
            name="type"
            onChange={typeHandler}
          />
          Thin
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Thick"
            name="type"
            onChange={typeHandler}
          />
          Thick
        </label>
        <br />
        <br />
        <label>Choose Delivery Option</label>
        <br />
        <label>
          <input
            required
            type="radio"
            value="Pickup"
            name="delivery"
            onChange={deliveryHandler}
          />
          Pickup
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            name="delivery"
            onChange={deliveryHandler}
          />
          Delivery
        </label>
        <br />
        <br />
        <label>Special Instructions (if any): </label>
        <br />
        <textarea
          rows="4"
          cols="40"
          onChange={(event) => setInstructions(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>
      {formData && (
        <div>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings: {toppings.length > 0 ? toppings.join(", ") : "none"}</p>
          <p>Crust Type: {currType}</p>
          <p>Delivery Option: {delivery}</p>
          <p>Special Instructions: {instructions ? instructions : "none"}</p>
        </div>
      )}
    </main>
  );
}
