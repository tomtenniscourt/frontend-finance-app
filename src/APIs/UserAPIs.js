import axiosInstance from "./AxiosInstance"

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    console.log('response', response)
    return response.data;
}

export const createUser = async (userDetails) => {
const response = await axiosInstance.post("/users", userDetails)
console.log('createUserResponse', response)
return response.data
}
