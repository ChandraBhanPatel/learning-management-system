import React, { useEffect, useState } from "react";
import { getAllDomains } from "../../services/Domain/DomainService";



const ViewDomain = () => {
  const [domains, setDomains] = useState([]);

  const loadDomains = async () => {
  try {
    const response = await getAllDomains();
    setDomains(response);
  } catch (error) {
    console.error("Error loading domains:", error);
  }
};

  
  useEffect(() => {
    loadDomains();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Domain List</h2>

      {domains.length === 0 ? (
        <p className="text-center text-muted">No domains found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((domain) => (
              <tr key={domain.id}>
                <td>{domain.id}</td>
                <td>{domain.title}</td>
                <td>{domain.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewDomain;
