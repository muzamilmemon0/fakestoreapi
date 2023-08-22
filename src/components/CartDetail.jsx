import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function CartDetail() {
  const { cartId } = useParams();
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.log("Error fetching cart details: ", error));
  }, [cartId]);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-3 text-center">Cart Details</h2>
      <div className="cart-details">
        <div className="cart-card border p-4 mb-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Cart #{cart.id}</h2>
          <p>User ID: {cart.userId}</p>
          <p>Date: {formatDate(cart.date)}</p>
          <div className="products">
            <h3 className="font-semibold mt-2">Products:</h3>
            <ul>
              {cart.products.map((product) => (
                <li key={product.productId}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
