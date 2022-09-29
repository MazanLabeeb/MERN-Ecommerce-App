import { Container } from "react-bootstrap";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";


const App = () => {
  return (
    <>
      <Header />
      <main>

        <Container>
          <Home />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
