import client from './axios.config.js';

const patient = '/patient';

const getPatient = (data, id) => {
    return client.get(`${patient}/${id}`, data)
}

const getAll = (data) => {
    return client.get(`${patient}`, data)
}

const createPatient = (data) => {
    return client.post(`${patient}`, data)
}

const updatePatient = (data, id) => {
    console.log(id);
    return client.put(`${patient}/${id}`, data)
}

const deletePatient = (id) => {
    return client.delete(`${patient}/${id}`)
}

export {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient,
    getAll
};
