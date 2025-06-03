import { Button } from "react-bootstrap";
import { useState } from "react";

export default function DeliveryMethods() {
  const [items, setItems] = useState([
    { name: "Home Delivery (Express)", isActive: true },
    { name: "Home Delivery (Standard)", isActive: false },
    { name: "Click and Collect", isActive: false },
  ]);

  function handleChange(index) {
    setItems((prevItems) =>
      prevItems.map((e, i) => ({ ...e, isActive: i === index })),
    );
  }

  const list = items.map((item, index) => {
    return (
      <div className="mt-3">
        <Button
          variant="outline-light"
          key={index}
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
          <p className="mt-2">You have chosen: {item.name}</p>
        ) : null;
      })}
    </>
  );
}
