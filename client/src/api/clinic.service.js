import client from "./axios.config.js";

const clinic = '/clinic'

const getClinic = (data) => {
    return client.get(`${clinic}`, data);
}

const showOne = (id) => {
    return client.get(`${clinic}/${id}`)
}

const create = (data) => {
    return client.post(`${clinic}`, data)
}

export {
    getClinic,
    showOne,
    create
}