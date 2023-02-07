import axios from "axios";

const URL=  process.env.REACT_APP_BACKEND_URL ||  "http://localhost:8000"

export const getServerDetails = async (limit, pno) => {
  // console.log("my latest limit and pno", limit, pno);
  try {
    return await axios.post(`${URL}/getSDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Server", error);
  }
};


export const getProvidersDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getPDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Provider", error);
  }
};


export const getCustomerDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getCDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Customer", error);
  }
};
export const getCustomerDetails1 = async () => {
  try {
    return await axios.get(`${URL}/getCDetails`);
  } catch (error) {
    console.log("Error while getting Customer", error);
  }
};



export const getdidDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getdDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting DID", error);
  }
};


export const getServicesDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getServDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Services", error);
  }
};


export const getTelcoProviderDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getTelcoDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Telco Provider", error);
  }
};


export const getPalatNumberDetails = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getPalatDetails`, { limit, pno });
  } catch (error) {
    console.log("Error while getting Palat Number", error);
  }
};

export const getPalatNumberDetailsCount = async (limit, pno) => {
  try {
    return await axios.post(`${URL}/getPalatDetailsCount`);
  } catch (error) {
    console.log("Error while getting Palat Number", error);
  }
};

