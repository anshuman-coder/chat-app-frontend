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


