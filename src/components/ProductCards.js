import { Col, Row, Button, Card } from "react-bootstrap";

function ProductCards() {
  const Products = [
    { id: 0, name: "Test", description: "A description here" },
    { id: 1, name: "Test1", description: "Another description here" },
    { id: 2, name: "Test2", description: "More stuff"}
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
              <Button variant="purple">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}

export default ProductCards;
