import {Container, Row, Col} from 'react-bootstrap';
import "./footer.styles.scss";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; FalconStore
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;