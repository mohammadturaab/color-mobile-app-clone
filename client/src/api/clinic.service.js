import client from "./axios.config.js";

const clinic = '/clinic'

const getClinic = (data) => {
    return client.get(`${clinic}`, data);
}

const index = (id, data) => {
    return client.get(`${clinic}/${id}`, data)
}

const get = (id, data) => {
    console.log(id);
    return client.get(`${clinic}/${id}`, data)
}

const create = (data) => {
    return client.post(`${clinic}`, data)
}

export {
    getClinic,
    index,
    create,
    get
}