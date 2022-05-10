import client from "./axios.config.js";
const staff = './staff';

const show = (data, id) => {
    return client.get(`${staff}/${id}`)
}


export {show};