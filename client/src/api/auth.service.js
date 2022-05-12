import client from "./axios.config";
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = "/auth";
const staff = "/staff";

const signup =(staff) => {
    return client
        .post(`${auth}/signup`, staff )
        .then((res)=>{
            return res;
        })
}


const login = (staff) => {
    console.log("hitting")
    try {
        return client
            .post(`${auth}/login`, staff)
            .then((res) => {
                if (res.data.token) {
                    AsyncStorage.setItem("token", JSON.stringify(res.data.token))
                    AsyncStorage.setItem("user", JSON.stringify(user.email))
                }
            })
        return res;
    }catch(err){
        console.log("here " + err)
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

export {signup, login, currentStaff, logout}