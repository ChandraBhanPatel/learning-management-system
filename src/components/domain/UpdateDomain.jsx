import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function UpdateDomain() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get existing domain data from location.state
  const existingDomain = location.state || { title: "", description: "" };

  const [domain, setDomain] = useState({
    title: "",
    description: "",
  });

  // Prefill form with existing data when component loads
  useEffect(() => {
    if (existingDomain) {
      setDomain(existingDomain);
    }
  }, [existingDomain]);

  const handleChange = (e) => {
    setDomain({ ...domain, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated domain:", domain);

    // After updating, navigate back to View page
    navigate("/view", { state: domain });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Update Domain</h2>

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

        <button type="submit" className="btn btn-success w-100">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateDomain;
