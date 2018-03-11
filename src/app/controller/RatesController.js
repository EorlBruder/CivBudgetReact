import AuthenticationController from "./AuthenticationController";
import axios from "axios";
import AppConstants from "../../constants/AppConstants";
import RateMapper from "../model/RateMapper";

class RatesController {
    findAll() {
        const authorizationHeader = AuthenticationController.getAuthorizationHeader();
        return axios.get(AppConstants.API_URL + "rates", authorizationHeader).then(
            (response) => {
                return response.data
            },
            (error) => {
                console.log(error);
                return []
            }
        )
    }

    update(rate) {
        const payload = RateMapper.mapToDTO(rate);
        console.log(payload);
        const authorizationHeader = AuthenticationController.getAuthorizationHeader();
        return axios.post(AppConstants.API_URL + "rates/update", payload, authorizationHeader).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    delete(rate) {
        const payload = RateMapper.mapToDTO(rate);
        console.log(payload);
        const authorizationHeader = AuthenticationController.getAuthorizationHeader();
        return axios.post(AppConstants.API_URL + "rates/delete", payload, authorizationHeader).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}

export default RatesController