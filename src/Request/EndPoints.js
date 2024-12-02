import { https } from "./https";

// to get user list
export const usersList = async () => {
  return await https.get(`/users`);
};

// to add user
export const addUsers = async (body) => {
  return await https.post(`/users`, body);
};

// to view user
export const viewUsers = async (id) => {
  return await https.get(`/users/${id}`);
};

// to delete user
export const deleteUsers = async (id) => {
  return await https.delete(`/users/${id}`);
};
