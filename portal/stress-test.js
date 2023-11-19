import http from "k6/http";
import { sleep } from "k6"

const URL = 'http://34.42.212.93/'

//vus é quantidade de usuários
//durations é a quantidade de segundos que o k6 vai segurar cada request

export const options = {
    vus: 500,
    duration: '50s'
};

export default function () {
    const response = http.get(URL);
    sleep(1)
}