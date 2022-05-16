import { writable } from "svelte/store";

export const datas = writable([]);

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    return datas.set(data);
}
getData();