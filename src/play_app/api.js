import axios from 'axios';

let config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

export const getRequest = axios.create({
    baseURL: "http://localhost:8099",
    method: 'post',
    withCredentials: true,
});


export const apiModel = async(axiosname, name, data)=> {
    let response = await axiosname.post(name, data, config);
    return response;
}

export const TeamList = async() => await apiModel(getRequest, '/showList' , null)

export const addNewTeam = async() => await apiModel(getRequest, '/addTeam' , null)
