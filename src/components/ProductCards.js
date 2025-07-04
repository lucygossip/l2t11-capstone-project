import { Col, Row, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, updateTotalCost } from "../store/cartState";
import fruit from "../images/fruit.jpg";

function ProductCards() {
  // Use redux to manage the state of the cart and dispatch reducers
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Product list, each with a unique ID to use as a key
  const Products = [
    {
      id: 0,
      name: "Apple",
      description: "A description here",
      cost: 1.25,
      image: fruit,
    },
    {
      id: 1,
      name: "Banana",
      description: "Another description here",
      cost: 3,
      image: fruit,
    },
    {
      id: 2,
      name: "Pear",
      description: "More stuff",
      cost: 2.48,
      image: fruit,
    },
  ];

  return (
    <>
    {/* Styling for purple buttons that makes use of bootstrap's btn- classes */}
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
        {/* Product list is mapped as cards */}
        {Products.map((product) => (
          <Col key={product.id}>
            <Card
              style={{ width: "18rem" }}
              bg="dark"
              text="light"
              border="light"
              className="m-auto"
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title className="text-purple">{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>£{product.cost.toFixed(2)}</Card.Text>
                {/* Button dispatches reducers to carry out actions on click */}
                <Button
                  variant="purple"
                  onClick={() => {
                    dispatch(addCartItem(product));
                    dispatch(updateTotalCost(product.cost));
                    alert("Added.");
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductCards;
