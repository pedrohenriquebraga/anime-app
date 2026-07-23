import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tenrai.org/v1",
  headers: {
    Authorization: undefined,
  },
});

export { api };
