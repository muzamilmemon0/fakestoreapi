import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Users from "./components/Users";
import Carts from "./components/Carts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartDetail from "./components/CartDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/navbar" element={<Navbar />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route
          exact
          path="/product/:productId"
          element={<SingleProduct />}
        ></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route
          exact
          path="/category/:categoryName"
          element={<CategoryProducts />}
        ></Route>
        <Route exact path="/users" element={<Users />}></Route>
        <Route exact path="/carts" element={<Carts />}></Route>
        <Route exact path="/carts/:cardId" element={<CartDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
