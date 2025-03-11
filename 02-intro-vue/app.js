
const { createApp, ref } = Vue; // createApp para crear una App en vue y ref para crear una variable reactiva en vue 


/* Creación de nuestra aplicación en Vue.js*/
const app = createApp ( {
    //template literal
    template: `
        <h1>Hola Mundo</h1>
        <p>Desde App.js</p>
    `
});

app.mount('#myApp'); //En donde se va a montar la aplicacion para referenciarla en index.html