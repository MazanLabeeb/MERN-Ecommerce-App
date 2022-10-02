import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

const ProductPage = () => {
    const { id } = useParams();

    return (
        <>
            <Header />
            <Container>
                <main>
                    <h1>{id}</h1>
                </main>
            </Container>
            <Footer />

        </>
    );
}


export default ProductPage;