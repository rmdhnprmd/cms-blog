const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: 'https://cdn.contentful.com/spaces/pgdlbrgrbxck/environments/master/',
  params: {
    access_token: process.env.CONTENTFUL_ACCESS_TOKEN,
  }
})

export default axiosInstance;