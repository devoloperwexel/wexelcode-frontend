import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: `${process.env['NEXT_PUBLIC_BASE_URL']}/api/v1`,
});

export default axiosConfig;
