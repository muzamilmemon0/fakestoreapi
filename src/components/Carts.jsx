import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((data) => setCarts(data))
      .catch((error) => console.log("Error fetching carts: ", error));
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="text-2xl font-bold mb-3 text-center">Carts</h2>
      <div className="carts grid grid-cols-3 gap-4">
        {carts.map((cart) => (
          <Link key={cart.id} to={`/carts/${cart.id}`} className="cart-link">
            <div className="cart-card border p-4 mb-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Cart #{cart.id}</h2>
              <p>User ID: {cart.userId}</p>
              <p>Date: {new Date(cart.date).toLocaleDateString()}</p>
              <div className="products">
                <h3 className="font-semibold mt-2">Products:</h3>
                <ul>
                  {cart.products.map((product) => (
                    <li key={product.productId}>
                      Product ID: {product.productId}, Quantity:{" "}
                      {product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Carts;
