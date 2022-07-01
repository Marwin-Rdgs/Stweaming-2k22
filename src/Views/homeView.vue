<template>

<div class="ml-2 pt-52">
    <h2 class="font-kyivtype-sans"> Les nouveautés : </h2>
    <hr class="border-noir lg:w-28 w-1/3 ml-5"/>
</div>

<div class="grid lg:grid-cols-4 md:grid-cols-2 place-items-stretch place-self-center lg:mb-8 mb-12">

<card />
<card />
<card />
<card />
<card />
<card />


</div>

</template>

<script>
import card from '../components/card.vue'

export default {
    components:{ card }
};

</script>
