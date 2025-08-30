//roperty input form

import { useState } from "react";

export default function AddPropertyForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    type: "Villa",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", type: "Villa", price: "", location: "", description: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 border rounded shadow-sm bg-light" style={{ maxWidth: "500px" }}>
      <div className="mb-3">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="form-select"
        >
          <option>Villa</option>
          <option>Apartment</option>
          <option>Office</option>
        </select>
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="form-control"
          rows="3"
          required
        />
      </div>
      <div className="mb-3">
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="form-control"
          type="url"
          pattern="https?://.+"
        />
      </div>
      <button className="btn btn-success w-100">Add Property</button>
    </form>
  );
}
