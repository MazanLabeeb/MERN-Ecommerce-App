import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from "../../products";
import { Link } from "react-router-dom";
import Rating from "../../components/rating/rating.component";

const ProductPage = () => {
    const { id } = useParams();
    const { name, image, rating, numReviews, price, description, countInStock } = products.find(prod => prod._id === id);



    return (
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
                    <ListGroup variant='flush'>
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

        </>
    );
}


export default ProductPage;