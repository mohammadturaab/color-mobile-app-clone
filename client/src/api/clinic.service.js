import client from "./axios.config.js";
const clinic = '/'

const getClinic = (data, id) => {
    return client.get(`${clinic}/${id}`, data)
}

const getAll = (data) => {
    return client.get(`${clinic}`, data)
}

const create = (data) => {
    return client.post(`${clinic}`, data)
}

export {
    getClinic,
    getAll,
    create
}