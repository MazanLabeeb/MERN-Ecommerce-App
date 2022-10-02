import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";


const MainTemplate = () => {
    return (
        <>
            <Header />
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>

            <Footer />
        </>
    );
}

export default MainTemplate;