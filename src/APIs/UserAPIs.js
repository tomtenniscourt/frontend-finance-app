import axiosInstance from "./AxiosInstance"

// GET REQUESTS
export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    console.log('response', response)
    return response.data;
}

export const getOneUser = async (userID) => {
    const response = await axiosInstance.get(`/users/${userID}`)
    return response.data
}


// PUT REQUESTS
export const createUser = async (userDetails) => {
const response = await axiosInstance.post("/users", userDetails)
return response.data
}
