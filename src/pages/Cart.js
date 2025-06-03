import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Card } from "react-bootstrap";
import DeliveryMethods from "../components/DeliveryMethods";
import HelpModal from "../components/HelpModal";

export default function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(state.cartItems);
  return (
    <>
        <Row className="mb-3 p-2">
            <Col>
            <h3 className="text-center">Your Cart</h3>
            </Col>
        
        </Row>
      <Row>
        <Col md="6">
          {state.cartItems.map((product) => (
            <Row key={product.id} className="mb-3">
              <Col>
                <Card
                  style={{ width: "18rem" }}
                  bg="dark"
                  text="light"
                  border="light"
                  className="m-auto"
                >
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title className="text-purple">
                      {product.name}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>£{product.cost.toFixed(2)}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md="6">
          <h3>Total Cost: £{state.totalCost.toFixed(2)}</h3>
          <hr />
          <h3>Choose Delivery Method: <HelpModal /></h3>
          <DeliveryMethods />
        </Col>
      </Row>
    </>
  );
}

/*
 <li>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <b>Cost: </b>
              £{item.cost.toFixed(2)}
            </p>
          </li>
*/
