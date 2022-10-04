import "./home.styles.scss";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/product-card.component";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect( 
        () => {
            fetch("/api/products")
            .then(response => response.json())
            .then(result => {
                setProducts(result);
            })
            .catch(err=>{
                console.log(err);
            })

        },
        []
    );


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