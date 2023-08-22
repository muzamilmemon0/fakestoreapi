import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((response) => response.json())
      .then((data) => setCategoryProducts(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, [categoryName]);
  return (
    <>
      <Navbar />
      <h2 className="text-2xl font-bold mb-3 text-center">
        Products in {categoryName}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {categoryProducts.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default CategoryProducts;
