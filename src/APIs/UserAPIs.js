import axiosInstance from "./AxiosInstance"

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    console.log('response', response)
    return response.data;
}

export const createUser = async (userDetails) => {
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
const response = await axiosInstance.post("/users", userDetails)
console.log('createUserResponse', response)
return response.data
}
