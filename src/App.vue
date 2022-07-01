<template>

  <headerw class="z-50"/>

  <div class="bg-blanc-b">

  <navbarw class="z-50 inset-x-0 bottom-0 fixed w-full"/>

    <RouterView />

  

  <footerw class="pb-12"/>    

  </div>

</template>


<script>
import { RouterLink, RouterView } from "vue-router"

import headerw from "./components/header2.vue"
import footerw from "./components/footer.vue"
import navbarw from "./components/navbar.vue"

export default {
    components:{ headerw, footerw, navbarw }
};

</script>