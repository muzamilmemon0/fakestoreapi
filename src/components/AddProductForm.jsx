import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
    image: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: [value] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct(productData);
    setProductData({
      title: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    });
  };
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={productData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md"
            required
          />
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={productData.price}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md"
            required
          />
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={productData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md"
            required
          />
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={productData.image}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md"
            required
          />
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={productData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full  border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
