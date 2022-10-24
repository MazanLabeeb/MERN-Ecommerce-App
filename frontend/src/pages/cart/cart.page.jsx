import { useParams } from "react-router-dom";

const CartPage = () => {
    const id = useParams();
    console.log(id);
    

    return <h1>I am Cart Page</h1>
}

export default CartPage;