
const { createApp, ref } = Vue; // createApp para crear una App en vue y ref para crear una variable reactiva en vue 


/* Creación de nuestra aplicación en Vue.js */
const app = createApp ( {
    //template literal
    template: `
        <h1>{{message}}</h1>
        <p>{{author}}</p>
    `,
    /* Inicio del Composition API */
    /* Esta es una funcion especial del ciclo de vida de los comonentes de Vue, la cual
     se va a ejcutar tan pronto el componente se monta*/
    /*setup() {
        const message = "I´m Batman"; //Variable para que se imprima en pantalla
        return {
            message,
        } // return para asegurar lo que se quiere mostrar 
    }*/
   /* Para poder cambiar la variable y no covertirla a let, es decir, cambiar su valor, 
   hay que convertirla en una variable reactiva, envolviendo su valor con ref */
   setup () {
    const message = ref("I´m Batman"); //Variable reactiva con ref
    const author = ref ("Bruce Wayne");

    setTimeout(() => {
        message.value = 'Hola, soy Goku'; // .value para que se puedan aplicar los cambios a la variable
        author.value = 'Goku';
        console.log('Ejecutado');
    }, 1500);

    return {
        message,
        author
    };

   }
});

app.mount('#myApp'); //En donde se va a montar la aplicacion para referenciarla en index.html