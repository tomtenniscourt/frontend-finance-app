import axiosInstance from "./AxiosInstance"

export const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    return response.data;
}

