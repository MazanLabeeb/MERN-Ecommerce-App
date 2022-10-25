import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ButtonGroup, Toast } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Rating from "../../components/rating/rating.component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import productDetailAction from "../../store/product-detail/product-detail.action";
import CustomSpinner from "./../../components/spinner/spinner.component";
import CustomError from "./../../components/error/error.component";
import { ImMinus, ImPlus } from "react-icons/im"
import { ADD_TO_CART } from "../../store/cart/cart.types";
import CartAction from "../../store/cart/cart.action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
    const ADD = 'ADD';
    const MINUS = 'MINUS';
    const [qty, setQty] = useState(1);

    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.productDetailStore);

    useEffect(
        () => {
            dispatch(productDetailAction(id));

        }, []
    );

    const { _id, name, image, rating, numReviews, price, description, countInStock } = product;

    let disableAdd = false;
    let disableMinus = false;
    if (qty <= 1) disableMinus = true;
    if (qty >= countInStock) disableAdd = true;


    const qtyHandler = (type) => {
        switch (type) {
            case "ADD":
                setQty(qty + 1);
                break;
            case "MINUS":
                setQty(qty - 1);
                break;
        }

    }

    const addToCartHandler = () => {
        dispatch(CartAction({
            type: ADD_TO_CART,
            payload: {
                ...product,
                qty
            }
        }))

        toast("Item(s) added to Cart");

    }

    const navigate = useNavigate();
    const CheckoutHandler = () => {
        navigate(`/cart/`)

    }

    return (
        <>
            {loading ?
                <CustomSpinner />
                :
                error ?
                    <CustomError message={error} classes="mt-3" />
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
                                                <strong>Price:</strong> ${price}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <strong>Description:</strong> {description}
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

                                    {(countInStock > 0) &&
                                        <ListGroup.Item>
                                            <Row>
                                                <ButtonGroup size="sm" >
                                                    <Button variant={"secondary"} onClick={() => qtyHandler(MINUS)} disabled={disableMinus}><ImMinus /></Button>
                                                    <Button className="disabled" variant={"light"}>{qty}</Button>
                                                    <Button variant={"secondary"} onClick={() => qtyHandler(ADD)} disabled={disableAdd}><ImPlus /></Button>
                                                </ButtonGroup>
                                            </Row>
                                        </ListGroup.Item>
                                    }

                                    <ListGroup.Item>


                                        <Button className="btn-block border-radius-none mb-2" type='button' disabled={(countInStock > 0) ? false : true} onClick={addToCartHandler}>
                                            Add To Cart
                                        </Button>

                                        <Button variant="success" className="btn-block border-radius-none" type='button' disabled={(countInStock > 0) ? false : true} onClick={CheckoutHandler}>
                                            Checkout
                                        </Button>

                                    </ListGroup.Item>
                                </ListGroup>

                            </Col>
                        </Row>

                    </>}

            <ToastContainer className={"p-2"} />
        </>
    );
}


export default ProductPage;