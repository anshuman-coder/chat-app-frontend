export function formReducer(state, action) {
  switch (action.type) { 
    case "userName":
      return { ...state, userName: action.value };
    
    case "email":
      return { ...state, email: action.value };
    
    case "password":
      return { ...state, password: action.value };
    
    case "confirmPassword":
      return { ...state, confirmPassword: action.value };
    
    default:
      throw Error("No such type");
  }
}

export const handleValidation = async (formData, type) => {
  return await new Promise(function (resolve, reject) {
    if (type === "register") {
      if (!formData.userName || formData.userName.length === 0) return reject("Please enter Username!");
      if (formData.userName.length < 3) return reject("Username should be greater than 3 characters!");
      if (!formData.email || formData.email.length === 0) return reject("Please enter Email!");
      if (!formData.password || formData.password.length === 0) return reject("Please enter password!");
      if (!formData.confirmPassword || formData.confirmPassword.length === 0) return reject("Please enter password again!");
      if (formData.password !== formData.confirmPassword) return reject("password and confirm password doesn't match!");
    } 
    if (type === "login") { 
      if (!formData.email || formData.email.length === 0) return reject("Please enter email!");
      if (!formData.password || formData.password.length === 0) return reject("please enter password!");
    }

    return resolve(true);
  });
};


