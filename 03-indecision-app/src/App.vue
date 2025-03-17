<!--El template representa la plantilla que contiene el contenido HTML del componente-->
<template>
    <h1>Hola Mundo</h1>
</template>

<!--La etiqueta script contendrá todo el JavaScript de Vue relacionado con el componente.
Se tiene que poner lang="ts" para poder trabajar con TypScript y setup para trabajar con el 
Composition API-->
<script lang="ts" setup>
    console.log('Hola Mundo')
</script>

<!--En la etiqueta style podremos indicar los estilos CSS implicados con el componente en cuestión.
Para que los etilos no se apliquen de manera global, agregamos la palabra adicional scope, para que 
los estilos solo se apliquen a este component-->
<style scoped>
    h1 {
        color: blue;
    }
</style>