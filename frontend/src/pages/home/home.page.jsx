import "./home.styles.scss";
import products from "../../products";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";


const Home = () => {
    return (
        <>
            <Row>
                {products.map((products) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3} key={products._id} >
                            <ProductCard products={products} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default Home;