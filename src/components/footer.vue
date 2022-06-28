<template>
    <div class="bg-noir rounded-t-2xl">
        <div class="lg:flex grid">
            <!-- Contenus -->
            <div class="grid ml-10 my-4">
                <logo class="mb-4"/>
                <ul class="text-center border-blanc-b border-b-2 pb-5 border-0">
                    <li><Router-Link to="/"><p class="text-blanc-b hover:underline">Qu'est ce que Stweaming ?</p></Router-Link></li>
                    <li><Router-Link to="/"><p class="text-blanc-b hover:underline">Nous Contacter</p></Router-Link></li>
                 </ul>

                 <div class="flex mt-4 gap-7 justify-center">
                    <a href="discord.com" target="_blank"><discord /></a>
                    <a href="https://www.instagram.com/" target="_blank"> <instagram /> </a>
                    <a href="tiktok.com" target="_blank"><tiktok /></a>
                 </div>
               
            </div>

            <!-- Fond Blanc Droite -->
            <div>

            </div>
        </div>

        <Router-Link to="/"><p class="text-blanc-b text-center text-xs">Termes et conditions | Politique de confidentialité</p></Router-Link>

    </div>
</template>

<script>
import logo from "./icones/logolight.vue"
import instagram from "./icones/instagram.vue"
import tiktok from "./icones/tiktok.vue"
import discord from "./icones/discord.vue"

export default {
    components: {logo, instagram, tiktok, discord}
}
</script>