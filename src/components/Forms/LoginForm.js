import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputValue,
  setUsername,
  clearUserName,
} from "../../store/usernameState";
import { Form, Row, Col } from "react-bootstrap";

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
      {state.username === "" ? (
        <>
          <Form inline>
            <Form.Group as={Row} className="my-1">
              <Form.Label column sm="2" className="text-light">
                Login:
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  size="sm"
                  value={state.value}
                  onChange={handleChange}
                />
              </Col>
              <Col sm="4">
                <Button size="sm" onClick={() => handleSubmit(state.value)}>
                  Login
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </>
      ) : (
        <Row className="my-2">
          <Col sm="6" className="text-light">
            Hello, {state.username}!
          </Col>
          <Col sm="4">
            <Button size="sm" onClick={handleReset}>
              Logout
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
}
