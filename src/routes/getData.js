import axios from "axios";
import { writable } from "svelte/store";

export const datas = writable([]);

const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    const data = response.data;
    return datas.set(data);
}

getData();