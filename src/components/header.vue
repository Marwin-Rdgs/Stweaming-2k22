<template>
<div class="fixed flex gap-4 mb-20 lg:m-2 overflow-hidden">
   <Router-Link to="/"><logo class="w-4/5 hover:animate-pulse xs:hidden" /></Router-Link>
   <ul class="flex gap-9 mt-10 font-kyivtype-sans text-lg">
    <Router-Link to="/"><li class="hover:underline">Film</li></Router-Link> |
    <Router-Link to="/"><li class="hover:underline">Série</li></Router-Link> |
    <Router-Link to="/"><li class="hover:underline">Anime</li></Router-Link> |
    <Router-Link to="/"><li class="hover:underline">Dessin Anime</li></Router-Link>

    <!-- à faire : https://stackoverflow.com/questions/70906977/tailwind-underline-hover-animation -->
   </ul>
</div>    
</template>

<script>
import logo from "./icones/logo.vue"

export default {
    components: {logo}
}
</script>