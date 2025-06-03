import ProductCards from "../components/ProductCards";
import { Row, Col } from "react-bootstrap";

export default function Product() {
  return (
    <>
    <Row className="p-2 mb-4">
      <Col>
        <h2 className="text-center">Products</h2>
      </Col>
    </Row>
    <ProductCards />
    </>
  );
}
