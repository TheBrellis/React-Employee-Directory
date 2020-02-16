import axios from 'axios';

export function GetEmployees(query) {
    const QTY = 2;
    const URL = `randomuser.me/api/?results=${QTY}&nat=us`;
    return axios.get(URL)
}