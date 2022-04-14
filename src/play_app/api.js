import axios from 'axios';

let config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

export const getRequest = axios.create({
    baseURL: "http://localhost:8099/",
    method: 'get',
    withCredentials: true,
});




export const apiModel = async(axiosname, name, data)=> {
    let response = await axiosname.post(url, data, config);
}

export const TeamList = async() => await  apiModel(getRequest, '/' )