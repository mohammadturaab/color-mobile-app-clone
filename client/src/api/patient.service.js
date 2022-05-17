import client from './axios.config.js';

const patient = '/patient';

const getPatient = (data) => {
    return client.get (`${patient}`, data)
}

const createPatient = (data, id) => {
    return client.post (`${patient}/${id}`, data)
}

const updatePatient = (data, id) => {
    return client.put (`${patient}/${id}`, data)
}

const deletePatient = (id) => {
    return client.delete (`${patient}/${id}`)
}

export {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
};
