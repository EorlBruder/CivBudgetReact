import LocalStorageConstants from "../../constants/LocalStorageConstants";
import AppConstants from "../../constants/AppConstants";
import axios from 'axios';

class AuthenticationController {
    static isAuthenticated() {
        if (localStorage.getItem(LocalStorageConstants.JWT_TOKEN) == null) {
            return false;
        }
        const config = AuthenticationController.getAuthorizationHeader();
        return axios.get(AppConstants.API_URL, config).then(
            () => {
                return true;
            },
            (error) => {
                return error.response && error.response.status === 404;

            }
        )
    }

    static getAuthorizationHeader() {
        return {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(LocalStorageConstants.JWT_TOKEN)
            }
        };
    }

    static register(username, password) {
        const payload = {
            'username': username,
            'password': password
        };
        return axios.post(AppConstants.API_URL + 'sign-up', payload).then(
            (response) => {
                return response.status === 200;
            },
            () => {
                return false;
            }
        );
    }

    static login(username, password) {
        const payload = {
            'username': username,
            'password': password
        };
        console.log(payload);
        return axios.post(AppConstants.API_URL + 'login', payload).then(
            (response) => {
                return response;
            },
            (error) => {
                return error.response;
            }
        );
    }
}

export default AuthenticationController;