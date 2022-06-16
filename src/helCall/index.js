import axios from "axios";
const HEROKU_URL = 'https://back-pf.herokuapp.com' 

export async function helpCall(url) {
  return axios.get(`${HEROKU_URL}${url}`).then((res) => {
    return res.data;
  });
}

export async function helpCallPut(url, obj) {
  return axios.post(`${HEROKU_URL}${url}`, obj).then((res) => {
    return res.data;
  });

}

export async function helpCallUpdate(url, obj) {
  return axios.put(`${HEROKU_URL}${url}`, obj).then((res) => {
    return res.data;
  });

}

export async function helpCallDelete(url) {
  return axios.delete(`${HEROKU_URL}${url}`).then((res) => {
    return res.data;
  });
  
}