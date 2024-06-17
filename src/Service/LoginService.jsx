import axios from "axios";
const Login_BASE_REST_API_URL = 'http://localhost:8081';
class LoginService{
    createLogin(email,userData){
        return axios.post(Login_BASE_REST_API_URL+'/login/'+email,userData)
    }   
}
export default new LoginService();