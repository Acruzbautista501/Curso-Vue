import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'bXYm2JTD8V90CtxPdv3CsiVet5rpb9Hz';

/*fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then(resp => {
        return resp.json()
    })
    .then(body => console.log({ body }))
    .catch(err => console.log( err ))*/

/*fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then(resp => resp.json())
    .then(body => console.log({ body }))
    .catch(err => console.log( err ));*/

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then((resp) => resp.json())
    .then((body: GIFResponse) => {
        //console.log(body.data.type)
        console.log(body.data.images.downsized_medium.url)
    })
    .catch(err => console.log( err ));