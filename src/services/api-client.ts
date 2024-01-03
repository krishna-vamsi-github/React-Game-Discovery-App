import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
