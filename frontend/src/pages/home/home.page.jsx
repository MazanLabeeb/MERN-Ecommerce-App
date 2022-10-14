import "./home.styles.scss";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import productsAction from "../../store/products/products.action";


const Home = () => {

    let dispatch = useDispatch();
    let { loading, products, error } = useSelector(state => state.productsStore);
    useEffect(
        () => {
            dispatch(productsAction());
        },
        []
    );



    return (
        <>
            <Row>
                {loading ? <h1>Loading...</h1> :
                    error ? <h1>{error}</h1> :
                        products && products.map((products) => {
                            return (
                                <Col sm={12} md={6} lg={4} xl={3} key={products._id} >
                                    <ProductCard products={products} />
                                </Col>
                            );
                        })
                }
            </Row>
        </>
    );
}

export default Home;

