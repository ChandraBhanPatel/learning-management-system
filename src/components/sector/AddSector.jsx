import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllDomains } from "../../services/Domain/DomainService";

const AddSector = () => {
  const [sector, setSector] = useState({
    title: "",
    description: "",
    r_domainId_c_domainId: "",
  });

  const [domains, setDomains] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDomains()
      .then((data) => setDomains(data))
      .catch((error) => console.error("Failed to fetch domains:", error));
  }, []);

  const handleChange = (e) => {
    setSector({ ...sector, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSector(sector)
      .then(() => {
        alert("Sector added successfully!");
        navigate("/sector");
      })
      .catch((error) => {
        console.error("Failed to add sector:", error);
        alert("Error adding sector. Please try again later.");
      });
  };

  return (
    <Base>
      <div className="col-lg-12 p-3">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <strong>Add Sector</strong>
              <small> Form</small>
            </div>
            <div className="card-body card-block">
              <div className="form-group mb-3">
                <label className="form-control-label">Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Sector Title"
                  value={sector.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Select Domain</label>
                <select
                  className="form-control"
                  name="r_domainId_c_domainId"
                  value={sector.r_domainId_c_domainId}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Domain --</option>
                  {domains.map((domain) => (
                    <option key={domain.id} value={domain.id}>
                      {domain.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-3">
                <label className="form-control-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="5"
                  placeholder="Sector Description"
                  value={sector.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary mx-2">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate("/sector")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Base>
  );
};

export default AddSector;
