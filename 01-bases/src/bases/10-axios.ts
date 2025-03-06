import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'bXYm2JTD8V90CtxPdv3CsiVet5rpb9Hz';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    params: {
        api_key: apiKey,
    }
});

//export default giphyApi;

/*giphyApi.get<GIFResponse>('/random')
    .then( resp => console.log( resp.data.data.images.downsized_large.url ))
    .catch( err => console.log( err ) );*/