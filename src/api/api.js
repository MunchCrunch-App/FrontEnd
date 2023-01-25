import axios from "axios";

// create BASE API
const api = axios.create({
  baseURL: "https://fac659b1-d0a6-4f3d-a3b0-9a8da375dc62.mock.pstmn.io",
});

export default api;
