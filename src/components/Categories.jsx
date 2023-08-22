import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log("Error fetching categories: ", error));
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="text-2xl font-bold mb-3 text-center">Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className="bg-slate-500 text-white p-4 rounded shadow"
          >
            <h2>{category}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categories;
