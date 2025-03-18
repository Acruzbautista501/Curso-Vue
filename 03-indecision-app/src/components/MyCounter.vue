<!--El template representa la plantilla que contiene el contenido HTML del componente-->
<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squareCounter }}</h3>
    </section>

    <div>
        <button @click="counterAdd">+1</button> <!--Función para lanazar el evento de incrementar-->
        <button @click="counterRest">-1</button> <!--Función para lanazar el evento de decrementar-->
    </div>
</template>

<!--La etiqueta script contendrá todo el JavaScript de Vue relacionado con el componente.
Se tiene que poner lang="ts" para poder trabajar con TypScript y setup para trabajar con el 
Composition API-->
<script lang="ts" setup>
import { computed, ref } from 'vue';

    const counter = ref(4); /*Vue mantiene el estado de sus variables, siendo bastante útil, 
    porque permite hacer cambios sin necesidad de volver a recargar la aplicación*/
    
    const squareCounter = computed(() => counter.value * counter.value)  //Propiedad computada para mostrar el total del puntaje

    const counterAdd = () => {
        counter.value++
    }

    const counterRest = () => {
        counter.value--
    }


</script>

<!--En la etiqueta style podremos indicar los estilos CSS implicados con el componente en cuestión.
Para que los etilos no se apliquen de manera global, agregamos la palabra adicional scope, para que 
los estilos solo se apliquen a este component-->
<!--<style scoped>
    h1 {
        color: blue;
    }
</style>-->