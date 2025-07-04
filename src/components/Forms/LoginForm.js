import { Button, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  changeInputValue,
  setUsername,
  clearUserName,
} from "../../store/usernameState"; // State imports
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const state = useSelector((state) => state.username);
  const dispatch = useDispatch();

  // Function to track the input value
  const handleChange = (event) => {
    dispatch(changeInputValue(event.target.value));
  };

  // Function to handle form submit
  const handleSubmit = (input) => {
    dispatch(setUsername(input));
  };

  // Function to handle submit on press of enter key
  const handleKeyDown = (e, input) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(input);
      handleSubmit(input);
    }
  };

  // Function to reset the username on logout
  const handleReset = () => {
    dispatch(clearUserName());
  };

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

      {/* Choose which version to display base on whether the state contains a username */}
      {state.username === "" ? (
        <>
          <Form>
            <Container fluid className="d-flex align-items-center flex-wrap">
              <Form.Group as={Row} className="align-items-center g-2">
                <Col xs="auto">
                  <Form.Control
                    size="sm"
                    value={state.value}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyDown(e, state.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" onClick={() => handleSubmit(state.value)}>
                    Login
                  </Button>
                </Col>
                <Col xs="auto">
                  <Nav.Link as={Link} to="/Register" className="text-gray p-2">
                    Register
                  </Nav.Link>
                </Col>
              </Form.Group>
            </Container>
          </Form>
        </>
      ) : (
        <>
          <Form className="d-flex align-items-center flex-wrap">
            <Container fluid className="px-2">
              <Form.Group as={Row} className="align-items-center g-2">
                <Form.Label
                  column
                  xs="auto"
                  className="text-light text-truncate"
                  style={{
                    maxWidth: "150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  Hello, {state.username}!
                </Form.Label>
                <Col xs="auto">
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
