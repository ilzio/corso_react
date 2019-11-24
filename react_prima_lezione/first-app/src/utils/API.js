// base file for axios, defines a baseURL as well as a response type configuration
import axios from "axios";
export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    responseType: "json"
});