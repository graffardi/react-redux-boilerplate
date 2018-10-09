import axios from 'axios';

const SOME_KEY = 'SOME_KEY';
const SOME_URL = `http://api.some.url/data/apikey=${SOME_KEY}`;

export const ACTION_NAME = 'SOME_ACTION';

export const fetchInformation = (some_information) => {
    const url = `${SOME_URL}&query=${some_information}`;
    const request = axios.get(url);

    return {
        type: ACTION_NAME,
        payload: request
        .catch((error) => {
            console.log(error.message);
        })
    };
};