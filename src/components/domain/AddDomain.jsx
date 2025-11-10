import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDomain() {
  const [domain, setDomain] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDomain({ ...domain, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", domain);

    
    navigate("/view", { state: domain });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Domain</h2>

      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow bg-light col-md-6 mx-auto"
      >
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={domain.title}
            onChange={handleChange}
            placeholder="Enter domain title"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={domain.description}
            onChange={handleChange}
            placeholder="Enter domain description"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddDomain;
