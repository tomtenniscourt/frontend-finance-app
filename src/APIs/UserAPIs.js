// import axios from "axios";
import axiosInstance from "./AxiosInstance"
import checkAccessTokenExpiry from "../Auth/CheckAccessExpiry";

// GET REQUESTS
export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
}

export const getCurrentUser = async (userID) => {
    const response = await axiosInstance.get(`/users/${userID}`)
    return response.data
}


// POST REQUESTS
export const createUser = async (userDetails) => {
const response = await axiosInstance.post("/register", userDetails)
return response.data
}

export const logUserIn = async (userDetails) => {
    const response = await axiosInstance.post("/login", userDetails)
    console.log('log in response: ', response)
    if (response.data) {
        window.localStorage.setItem("Token", response.data.accessToken)
        window.localStorage.setItem("ExpiresAt", response.data.expiredAt)
    }
    return response.data
}

// Generate new access token.
export const regenerateAccessToken = async (userEmail) => {
    const response = await axiosInstance.post("/users/token", userEmail)
    return response.data
    }


// PUT REQUESTS
export const updateOneUser = async (userID, userDetails) => {
    const response = await axiosInstance.put(`/users/${userID}`, userDetails)
    return response.data
}

// DELETE REQUESTS
export const deleteOneUser = async (userID) => {
    const response = await axiosInstance.delete(`/users/${userID}`)
    return response.data
}
