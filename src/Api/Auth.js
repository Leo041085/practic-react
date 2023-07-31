import { instance } from "./api";

export const registration = async (userData) =>{
    const {data} = await instance.post('/auth/signup', userData);
    return data;
}