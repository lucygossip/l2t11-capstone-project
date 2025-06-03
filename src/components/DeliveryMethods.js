import { Button } from "react-bootstrap";
import { useState } from "react";

// Shows the different methods of delivery for the user to pick from
export default function DeliveryMethods() {
  // Setting the active state of each button option
  const [items, setItems] = useState([
    { id: 0, name: "Home Delivery (Express)", isActive: true },
    { id: 1, name: "Home Delivery (Standard)", isActive: false },
    { id: 2, name: "Click and Collect", isActive: false },
  ]);

  // Changing which button is active on button click
  function handleChange(index) {
    setItems((prevItems) =>
      prevItems.map((e, i) => ({ ...e, isActive: i === index })),
    );
  }

  // Mapping the buttons
  const list = items.map((item, index) => {
    return (
      <div key={item.id} className="mt-3">
        <Button
          variant="outline-light"
          onClick={() => handleChange(index)}
          className={item.isActive ? "active" : null}
        >
          {item.name}
        </Button>
      </div>
    );
  });

  return (
    <>
      {list}
      {items.map((item) => {
        return item.isActive ? (
          <p key={item.id} className="mt-2">You have chosen: {item.name}</p>
        ) : null;
      })}
    </>
  );
}
