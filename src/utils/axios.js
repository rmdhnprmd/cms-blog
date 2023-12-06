import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://cdn.contentful.com/spaces/pgdlbrgrbxck/environments/master",
  params: {
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN
  }
})

 
export default AxiosInstance;