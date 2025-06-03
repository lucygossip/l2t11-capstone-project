import { Col, Row, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, updateTotalCost } from "../store/cartState";
import fruit from "../images/fruit.jpg";

function ProductCards() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const Products = [
    {
      id: 0,
      name: "Test",
      description: "A description here",
      cost: 1.25,
      image: fruit,
    },
    {
      id: 1,
      name: "Test1",
      description: "Another description here",
      cost: 3,
      image: fruit,
    },
    {
      id: 2,
      name: "Test2",
      description: "More stuff",
      cost: 2.48,
      image: fruit,
    },
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
