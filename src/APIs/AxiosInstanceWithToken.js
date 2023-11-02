import axios from "axios";

// axios instance but sending the token
const axiosInstanceWithToken = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
        ? "https://finance-app-backend-6b1b3c021370.herokuapp.com/"
        : "http://localhost:5001",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    methods: "*"
})

// intercept the request configuration and insert the token if it exists
axiosInstanceWithToken.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("Token");
    config.headers.Authorization =  token ? `${token}` : '';
return config;
})

export default axiosInstanceWithToken;