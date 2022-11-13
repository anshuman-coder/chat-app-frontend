const getLocalData = () => { 
  const data = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_KEY)) || undefined;

  return data
}

export { getLocalData }