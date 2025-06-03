import { Col, Row, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, updateTotalCost } from "../store/cartState";

function ProductCards() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Products = [
    { id: 0, name: "Test", description: "A description here", cost: 1.25 },
    { id: 1, name: "Test1", description: "Another description here", cost: 3 },
    { id: 2, name: "Test2", description: "More stuff", cost: 2.48}
  ];
  return (
    <>
    <style type="text/css">
    {`
      .btn-purple {
        background: var(--electric);
        color: #fff;
        }
        .btn-purple:hover {
        background: var(--tacao)};
      .text-purple {
        color: var(--electric);
      }
    `}
    </style>
    <Row xs={1} md={2} lg={3} className="g-4 p-2">
      {Products.map((product) => (
        <Col key={product.id}>
          <Card style={{ width: "18rem" }} bg="dark" text="light" border="light" className="m-auto">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title className="text-purple">{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>£{product.cost.toFixed(2)}</Card.Text>
              <Button variant="purple" onClick={() => { 
                dispatch(addCartItem(product));
                dispatch(updateTotalCost(product.cost));
                }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default ProductCards;
