import axios from "axios";

const list = () => axios.get("/urls");

const create = payload => axios.post("/urls/", payload);

const count = id => axios.get(`/urls/${id}`);

const urlsApi = {
  list,
  create,
  count,
};

export default urlsApi;
