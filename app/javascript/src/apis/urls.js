import axios from "axios";

const list = () => axios.get("/urls");

const create = payload => axios.post("/urls/", payload);

const show = id => axios.get(`/urls/${id}`);

const update = id => axios.put(`urls/${id}`);

const urlsApi = {
  list,
  create,
  show,
  update,
};

export default urlsApi;
