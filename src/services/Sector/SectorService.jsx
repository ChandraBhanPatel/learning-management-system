import { myAxios } from "../helper";

// Add Sector
export const addSector = (sector) => {
  return myAxios.post("/addsector", sector).then((response) => response.data);
};

// Get all Sectors
export const getAllSectors = () => {
  return myAxios.get("/allsectors").then((response) => response.data);
};

// Get Sector by ID
export const getSectorById = (id) => {
  return myAxios.get(`/sector/${id}`).then((response) => response.data);
};

// Update Sector
export const updateSector = (id, sector) => {
  return myAxios.put(`/updatesector/${id}`, sector).then((response) => response.data);
};

// Delete Sector
export const deleteSector = (id) => {
  return myAxios.delete(`/deletesector/${id}`).then((response) => response.data);
};
