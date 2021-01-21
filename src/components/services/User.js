import axios from "axios";
const baseUrl = "http://localhost:8000/api/user";
const user = {};

user.list = async () => {
  const urlList = "user/role"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

user.save = async (data) => {
  const urlSave= "user/create"
  const res = await axios.post(urlSave,data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}


export default user