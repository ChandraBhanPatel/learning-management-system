import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ViewSector = () => {
  const [sectors, setSectors] = useState([]);
  const navigate = useNavigate();

  // Load all sectors on page load
  useEffect(() => {
    loadSectors();
  }, []);

  const loadSectors = () => {
    getAllSectors()
      .then((data) => {
        setSectors(data);
        console.log("Sectors loaded:", data);
      })
      .catch((error) => {
        console.error("Failed to fetch sectors:", error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this sector?")) {
      deleteSector(id)
        .then(() => {
          alert("Sector deleted successfully!");
          loadSectors();
        })
        .catch((error) => {
          console.error("Failed to delete sector:", error);
          alert("Failed to delete sector. Please try again later.");
        });
    }
  };

  const handleEdit = (sector) => {
    navigate(`/update-sector/${sector.id}`, { state: sector });
  };

  return (
    <Base>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>All Sectors</h3>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-sector")}
          >
            + Add Sector
          </button>
        </div>

        <div className="card">
          <div className="card-body">
            {sectors.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Domain ID</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectors.map((sector, index) => (
                      <tr key={index}>
                        <td>{sector.id}</td>
                        <td>{sector.title}</td>
                        <td>{sector.description}</td>
                        <td>{sector.r_domainId_c_domainId}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm mx-1"
                            onClick={() => handleEdit(sector)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm mx-1"
                            onClick={() => handleDelete(sector.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h5 className="text-center text-muted mt-3">
                No sectors found. Please add one.
              </h5>
            )}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ViewSector;
