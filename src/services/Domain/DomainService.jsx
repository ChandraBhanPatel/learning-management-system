import { myAxios } from "../../helper";

//  Add domain
export const addDomain = (domain) => {
  return myAxios.post("/adddomain", domain).then((response) => response.data);
};


// Get all domains
export const getAllDomains = () => {
  return myAxios.get("/all").then((response) => response.data);
};


// Get domain by ID
export const getDomainById = (id) => {
  return myAxios.get(`/getdomain/${id}`).then((response) => response.data);
};


// Update domain by ID
export const updateDomain = (id, domain) => {
  return myAxios.put(`/update/domain/${id}`, domain).then((response) => response.data);
};


// Delete domain by ID
export const deleteDomain = (id) => {
  return myAxios.delete(`/delete/domain/${id}`).then((response) => response.data);
};
