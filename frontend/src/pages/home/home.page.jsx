import "./home.styles.scss";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import productsAction from "../../store/products/products.action";
import CustomSpinner from "../../components/spinner/spinner.component";
import CustomError from "../../components/error/error.component";


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
                {loading ? <CustomSpinner /> :
                    error ? <CustomError message = {error}  classes = {"mt-3"} dismiss = {false} />:
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

