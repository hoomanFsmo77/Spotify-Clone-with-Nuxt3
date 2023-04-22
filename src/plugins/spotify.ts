import SpotifyWebApi from "spotify-web-api-node";

export default defineNuxtPlugin(async  nuxtApp=>{
    const spotifyApi=new SpotifyWebApi()
    nuxtApp.provide('spotifyApi',spotifyApi)
})