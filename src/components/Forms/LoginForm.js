import { Button, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputValue,
  setUsername,
  clearUserName,
} from "../../store/usernameState";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const state = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeInputValue(event.target.value));
  };
  const handleSubmit = (input) => {
    dispatch(setUsername(input));
  };
  const handleReset = () => {
    dispatch(clearUserName());
  };

  console.log("Value is " + state.value);

  return (
    <>
      <style type="text/css">
        {`
        .text-gray {
        color: #ccc;
        font-size: 0.9rem;
        }
        .text-gray:hover {
        color: #ddd;
        }
      `}
      </style>
      {state.username === "" ? (
        <>
          <Form>
            <Container>
              <Form.Group as={Row} className="p-3 align-items-center">
                <Col sm="7">
                  <Form.Control
                    size="sm"
                    value={state.value}
                    onChange={handleChange}
                  />
                </Col>
                <Col sm="2">
                  <Button size="sm" onClick={() => handleSubmit(state.value)}>
                    Login
                  </Button>
                </Col>
                <Col sm="2">
                   <Nav.Link as={Link} to="/Register" className="text-gray p-2">Register</Nav.Link>
                </Col>
              </Form.Group>
            </Container>
          </Form>
        </>
      ) : (
        <>
          <Form>
            <Container>
              <Form.Group as={Row} className="p-3">
                <Form.Label column sm="9" className="text-light">
                  Hello, {state.username}!
                </Form.Label>
                <Col sm="2">
                  <Button size="sm" onClick={handleReset}>
                    Logout
                  </Button>
                </Col>
              </Form.Group>
            </Container>
          </Form>
        </>
      )}
    </>
  );
}
