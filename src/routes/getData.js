import axios from "axios";
import { writable } from "svelte/store";

export const datas = writable([]);

const getData = async () => {
    const response = await axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_wu3sr107");
    const data = response.data.items;
    return datas.set(data);
}

getData();