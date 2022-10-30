const getLocalData = () => { 
  const data = localStorage.getItem(process.env.REACT_APP_LOCAL_KEY) || undefined;

  return data
}

export { getLocalData }