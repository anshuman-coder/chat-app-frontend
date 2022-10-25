import instance from "../api/apiConfig"

export const register = (data) => { 
  return new Promise(function (resolve, reject) { 
    const reqObj = {
      userName: data.userName,
      email: data.email,
      password: data.password
    };

    instance.post("/public/register", reqObj)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err)
      });
  })
}