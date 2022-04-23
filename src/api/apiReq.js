import axios from "axios";

export default axios.create({
  baseURL: "https://835c-77-77-218-16.eu.ngrok.io/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
