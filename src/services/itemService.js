/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const getAll = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const createOne = async (url, message) => {
  const response = await axios.post(url, message);
  return response.data;
};

const updateOne = async (url, message) => {
  const response = await axios.put(url + `/${message.id}`, message);
  return response.data;
};

const deleteOne = async (url, id) => {
  const response = await axios.delete(url + `/${id}`);
  return response.data;
};

export default { getAll, createOne, updateOne, deleteOne };
