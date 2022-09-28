import { Container } from "react-bootstrap";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className="display-5">
          Welcome to Falcon Shop

          </h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
