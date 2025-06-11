import RegistrationForm from '../components/Forms/RegistrationForm'
import { Row, Col } from 'react-bootstrap'

export default function Register() {
    return(
        <>
        <Row className="justify-content-center p-2">
            <Col xs="10" sm="8" md="6" xl="4">
                <h2>Register</h2>
            </Col>
        </Row>
        <Row className="justify-content-center p-2">
            <Col xs="10" sm="8" md="6" xl="4">
            <RegistrationForm />  {/* Component to display registration form */}
            </Col>
        </Row> 
        </>       
    )
}