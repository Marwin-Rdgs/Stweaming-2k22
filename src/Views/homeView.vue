<template>

<headerw class="z-50"/>

<div class="ml-2 pt-52">
    <h2 class="font-kyivtype-sans"> Les nouveautés : </h2>
    <hr class="border-noir lg:w-28 w-1/3 ml-5"/>
</div>

<div class="grid lg:grid-cols-4 md:grid-cols-2 place-items-stretch place-self-center lg:mb-8 mb-12">

<card />

</div>

<navbarw class="z-50 fixed w-full"/>

<footerw class="pb-12"/>

</template>

<script>
import card from '../components/card.vue'
import headerw from "../components/header.vue"
import footerw from "../components/footer.vue"
import navbarw from "../components/navbar.vue"

export default {
    components:{ card, headerw, footerw, navbarw }
};

</script>
