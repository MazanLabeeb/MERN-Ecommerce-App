import Home from "./pages/home/home.page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/products/product.page";
import PageNotFound from "./pages/PageNotFound/PageNotFound.pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/*" element={<PageNotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
