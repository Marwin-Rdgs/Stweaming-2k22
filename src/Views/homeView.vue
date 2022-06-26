<template>

<headerw />

<h2> Test de cards Contenus Stweaming : </h2>

<div class="grid lg:grid-cols-4 md:grid-cols-2 place-items-stretch place-self-center">

<card />



</div>

</template>

<script>
import card from '../components/card.vue'
import headerw from "../components/header.vue"

export default {
    components:{ card, headerw }
};

</script>
