import axios from 'axios'
const basePath="https://kisan-server.herokuapp.com/";

function getResource(path=''){
    return axios.get(`${basePath}${path}`);
}
export {getResource};