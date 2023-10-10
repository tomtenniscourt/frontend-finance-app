import axios from "axios";

const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
        ? "https://finance-app-backend-6b1b3c021370.herokuapp.com/"
        : "http://localhost:5001",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
})