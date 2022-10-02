import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from "../../products";

const ProductPage = () => {
    const { id } = useParams();
    const { name } = products.find(prod => prod._id === id);



    return (
        <>
            <h1>{name}</h1>

        </>
    );
}


export default ProductPage;