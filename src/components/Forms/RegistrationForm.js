import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.surname) {
    errors.surname = "Required";
  }
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
    // This is a regular expression of a valid email
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,16}$/i.test(values.password)) {
    errors.password =
      "Password must be 8-16 characters in length, and contain a lowercase letter, an uppercase letter, a number and a special character.";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password does not match";
  }
  return errors;
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      // Submit handling code goes here
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="firstname">First Name</Form.Label>
        <Form.Control
          id="firstname"
          name="firstname"
          type="text"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
        />
        {formik.touched.firstname && formik.errors.firstname ? (
          <div className="text-danger">{formik.errors.firstname}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="surname">Surname</Form.Label>
        <Form.Control
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className="text-danger">{formik.errors.surname}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
        <Form.Control
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange} // Change handler
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-danger">{formik.errors.confirmPassword}</div>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
};

export default RegistrationForm;
