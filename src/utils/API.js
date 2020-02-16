import axios from 'axios';

export function GetEmployees(query) {
    const QTY = 20;
    const URL = `https://randomuser.me/api/?results=${QTY}&nat=us`;
    return axios.get(URL)
}