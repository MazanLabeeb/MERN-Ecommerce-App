import { Button, ButtonGroup, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import './cart.styles.scss';
import { AiFillDelete } from 'react-icons/ai';
import { ImMinus, ImPlus } from "react-icons/im"
import CartAction from "../../store/cart/cart.action";
import { ADD_TO_CART, DECREMENT_TO_CART, INCREMENT_TO_CART, REMOVE_FROM_CART } from "../../store/cart/cart.types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillHandbagFill } from "react-icons/bs";



const CartPage = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cartStore);


    // let disableAdd = false;
    // let disableMinus = false;
    // if (qty <= 1) disableMinus = true;
    // if (qty >= countInStock) disableAdd = true;

    const removeFromCartHandler = (id) => {
        if (window.confirm("Are you sure to remove the item from the cart")) {
            dispatch({ type: REMOVE_FROM_CART, payload: id });
            toast('Item(s) removed from cart');
        }
    }


    let totalItems = cartItems.reduce( (previous, next)=>previous + next.qty , 0);
    let totalPrice =  cartItems.reduce((previous, next) => previous + (next.price*next.qty),0);


    return <>
        <Container className="mt-3">
            <h1><BsFillHandbagFill className="mb-3 text-primary" /><span> Shopping Cart</span></h1>
            {cartItems.length > 0 ?
                <Row>
                    <Col md={9}>
                        <Table responsive>
                            <tbody>
                                {
                                    cartItems.map(item => {
                                        return <tr key={item._id}>
                                            <td className="hide-on-sm"><img src={item.image} className="cart-image" alt={item.name} /></td>
                                            <td className="font-weight-bold">{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <ButtonGroup size="sm" >
                                                    <Button variant={"secondary"} onClick={() => dispatch({ type: DECREMENT_TO_CART, payload: item._id })} ><ImMinus /></Button>
                                                    <Button className="disabled" variant={"light"}>{item.qty}</Button>
                                                    <Button variant={"secondary"} onClick={() => dispatch({ type: INCREMENT_TO_CART, payload: item._id })} ><ImPlus /></Button>
                                                </ButtonGroup>
                                            </td>
                                            <td>{<AiFillDelete onClick={() => removeFromCartHandler(item._id)} className=" remove-btn" />}</td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={3}>
                        <Card border={"secondary"} className={"p-3"}>
                            <h2>
                                TOTAL ({totalItems}) ITEMS
                            </h2>
                            <h5>
                                ${totalPrice.toFixed(2)}
                            </h5>
                        </Card>

                    </Col>
                </Row>
                :
                <h3 className="fw-light text-secondary mt-3">Cart is empty</h3>

            }
            <ToastContainer className={"p-2"}  />

        </Container>
    </>
}

export default CartPage;