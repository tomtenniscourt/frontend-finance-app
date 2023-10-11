import axiosInstance from "./AxiosInstance"

export const getAllUsers = async () => {

    const response = await axiosInstance.get("/users");
    console.log('response', response)
    return response.data;
}

