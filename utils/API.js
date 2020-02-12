import axios from 'axios';

export function GetSeeds(query) {
    const QTY = 100;
    const BASEURL = `randomuser.me/api/?results=${QTY}&nat=us`;
    return axios.get(url)
}