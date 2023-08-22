import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log("Error fetching product data: ", error));
  }, [productId]);

  return (
    <>
      <Navbar />
      <div className="border-sm flex items-center md:flex-col">
        <img src={product.image} alt={product.title} width={200} />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl font-semibold">Category: {product.category}</p>
        <p className="text-lg font-medium">Price: ${product.price}</p>
        <p className="text-md ">{product.description}</p>
      </div>
    </>
  );
}

export default SingleProduct;
