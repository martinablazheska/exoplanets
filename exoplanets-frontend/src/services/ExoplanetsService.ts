import { axios } from "./axios"

export const getExoplanets = async():Promise<unknown> => {
    const {data} = await axios.get('/exoplanets');
    console.log(data);
    return data;
}