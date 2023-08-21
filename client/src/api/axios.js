import axios from "axios";
import config from "../../config";

const instance = axios.create({
    baseURL: config.baseURl,
    withCredentials: true,
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data.message);
        } else if (error.request) {
            return Promise.reject(error.request);
        } else {
            return Promise.reject(error);
        }
    }
);

export default instance;
