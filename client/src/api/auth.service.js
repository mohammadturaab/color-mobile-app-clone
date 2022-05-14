import client from "./axios.config";

const auth = "/auth";
const staff = "/";

const signup = (email, password, firstName, lastName) => {
    return client
    .post(`${auth}/signup`, {email,password,firstName,lastName})
    .then((res) => {console.log(res)})
}


const login = (email, password) => {
    try {
        return client
        .post(`${auth}/login`, {email,password})
        .then((res) => {
            if(res.data.token) {
                console.log(res.data.message)
                localStorage.setItem("user", JSON.stringify(res.data.token))
            }
            return res.data.token;
        })
    }catch(err){
        console.log(err)
    }
}

const currentStaff = () => {
    let staff = localStorage.getItem("staff");
    return JSON.parse(staff)
}

const logout = () => {
    localStorage.removeItem("staff")
}

export {signup, login, currentStaff, logout}