import { Container } from "react-bootstrap";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";


const PageNotFound = () => {
    return (
        <>
        <Header />
            <Container>
                <main>
                    <h1 className="display-3">404! Page Not Found!</h1>
                </main>
            </Container>
        <Footer />
        </>
    );
}

export default PageNotFound;