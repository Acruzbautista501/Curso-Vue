<!--El template representa la plantilla que contiene el contenido HTML del componente-->
<template>
    <h1>Mi primera aplicación de Vue.js</h1>
    <hr>

    <MyCounter/>
</template>

<!--La etiqueta script contendrá todo el JavaScript de Vue relacionado con el componente.
Se tiene que poner lang="ts" para poder trabajar con TypScript y setup para trabajar con el 
Composition API-->
<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';


</script>

<!--En la etiqueta style podremos indicar los estilos CSS implicados con el componente en cuestión.
Para que los etilos no se apliquen de manera global, agregamos la palabra adicional scope, para que 
los estilos solo se apliquen a este component-->
<!--<style scoped>
    h1 {
        color: blue;
    }
</style>-->