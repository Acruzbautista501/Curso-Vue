const originalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];

const {createApp, ref, computed} = Vue

const app = createApp ( {

    setup() {

        const showAuthor = ref(true) // Propiedad reactiva que va a manejar el valor de author
        const quotes = ref(originalQuotes) // Propiedad reactiva que manda a llamar al arreglo para mostrar su información
        const totalQuotes = computed( ()=> {
            return quotes.value.length; // Función que retorna el valor esperado del arreglo
        }); // Propiedad computada para mostrar el total de frases que tiene el arreglo

        const toggleAuthor = () => {
            showAuthor.value = !showAuthor.value
        }

        const addQuote = () => {
            quotes.value.unshift({ quote: 'Hola Mundo', author: 'Aldair Cruz'}); // .value sirve para referenciar al valor 
            console.log(quotes)
        }
        
        return {
            quotes,
            showAuthor,
            toggleAuthor,
            addQuote,
            totalQuotes
        }
    }

});

/* El v-for es para iterar elementos. Es poderoso en Vue.js, 
porque no solo nos va a permitir a nosostors iterarlos, también
v a permitir a desestructurarlos, mañadirles índices y muchas 
otras cosas más */

app.mount('#myApp')