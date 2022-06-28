<template>
    
    <div class="bg-noir border-t-2 border-blanc-b rounded-t-3xl flex justify-center gap-10 mt-2">

        <Router-Link to="."><shop /></Router-Link>

        <Router-Link to="/"><chat /></Router-Link>

        <Router-Link to="/"><home /></Router-Link>

        <Router-Link to="/"><list /></Router-Link>

        <Router-Link to="/"><profil /></Router-Link>        
    
    </div>


</template>

<script>
import home from './icones/house.vue'
import chat from './icones/chat.vue'
import list from './icones/list.vue'
import shop from './icones/shop.vue'
import profil from './icones/profil.vue'

export default {
    components:{ home, chat, list, shop, profil }
};

</script>