import axios from "axios";

export const publicInstance = axios.create({
  baseURL: "http://localhost:8080/"
});

export const privateInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { Authorization: `Bearer token` }
});