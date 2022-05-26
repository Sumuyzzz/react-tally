let id = Number(window.localStorage.getItem('idMax'));
const createID = () => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id));
  return id;
};

export default createID;
