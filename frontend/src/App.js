import Home from "./pages/home/home.page";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/products/product.page";
import PageNotFound from "./pages/PageNotFound/PageNotFound.pages";
import MainTemplate from "./templates/main.template";
import CartPage from "./pages/cart/cart.page";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainTemplate /> }>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart/" element={<CartPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/*" element={<PageNotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

