import client from "./axios.config";

const auth = "/auth";
const staff = "/staff";

const register = (email, password, firstName, lastName) => {
    return client
    .post(`${auth}/register`, {email,password,firstName,lastName})
    .then((res) => {console.log(res)})
}


const login = (email, password) => {
    try {
        return client
        .post(`${auth}/login`, {email,password})
        .then((res) => {
            if(res.data.token) {
                console.log(res.data.message)
                localStorage.setItem("Staff", JSON.stringify(res.data.token))
            }
            return res.data.token;
        })
    }catch(err){
        console.log(err)
    }
}

const currentStaff = () => {
    let Staff = localStorage.getItem("staff");
    return JSON.parse(staff)
}

// const getProfile = () => {
//     return client.get(`${staff}/profile`)
// }

const logout = () => {
    localStorage.removeItem("Staff")
}

export {register, login, currentStaff, logout}