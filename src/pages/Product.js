import ProductCards from "../components/ProductCards";
import { Row, Col } from "react-bootstrap";

export default function Product() {
  return (
    <>
    <Row className="p-2">
      <Col>
        <h2>Products</h2>
      </Col>
    </Row>
    <ProductCards />
    </>
  );
}
