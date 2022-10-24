import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../../components/rating/rating.component";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import productDetailAction from "../../store/product-detail/product-detail.action";
import CustomSpinner from "./../../components/spinner/spinner.component";
import CustomError from "./../../components/error/error.component";

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.productDetailStore);

    useEffect(
        () => {
            dispatch(productDetailAction(id));

        }, []
    );

    const { name, image, rating, numReviews, price, description, countInStock } = product;



    return (
        <>
            {loading ?
                <CustomSpinner />
                :
                error? 
                <CustomError message = {error} classes="mt-3" />
                :
                <>
                    <Link className="btn btn-light my-3 " to={"/"}>
                        Go Back
                    </Link>
                    <Row>
                        <Col md={6} lg={9}>
                            <Row>
                                <Col lg={8} md={12} >
                                    <Image src={image} alt={name} fluid />

                                </Col>

                                <Col lg={4} md={12} >
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <h2>{name}</h2>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Rating rating={rating} numReviews={numReviews} />
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Price: ${price}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: {description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>

                            </Row>


                        </Col>
                        <Col md={6} lg={3}>
                            <ListGroup variant='flush' className="border">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>${price}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>{(countInStock > 0) ? <span className="text-success">In Stock</span> : <span className="text-danger">Out of Stock</span>}</Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Button className="btn-block border-radius-none" type='button' disabled={(countInStock > 0) ? false : true}>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>}

        </>
    );
}


export default ProductPage;