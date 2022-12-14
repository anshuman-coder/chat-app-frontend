import { publicInstance } from "../api/apiConfig"

export const register = (data) => {
  return new Promise(function (resolve, reject) {
    const reqObj = {
      userName: data.userName,
      email: data.email,
      password: data.password
    };

    publicInstance.post("/public/register", reqObj)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err)
      });
  })
};

export const login = (data) => { 
  return new Promise((resolve, reject) => { 
    const reqObj = {
      email: data.email,
      password: data.password
    };

    publicInstance.post("/public/login", reqObj)
      .then(res => {
        return resolve(res.data)
      })
      .catch(err => {
        return reject(err)
      });
  })
}