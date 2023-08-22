import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import AddProductForm from "./AddProductForm";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  // Function to add a new product to the list
  const addNewProductToList = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold mb-4">Fake Store Products</h1>
        <div className="flex flex-wrap">
          {products.map((product) => (
            <>
              <ProductDetail product={product} />
            </>
          ))}
        </div>
      </div>
      <AddProductForm onAddProduct={addNewProductToList} />
    </>
  );
}

export default Products;
