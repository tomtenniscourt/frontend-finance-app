import axiosInstance from "./AxiosInstance"

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    console.log('response', response)
    return response.data;
}

export const createUser = async () => {
const response = await axiosInstance.post("/users")
console.log('createUserResponse', response)
return response.data
}
