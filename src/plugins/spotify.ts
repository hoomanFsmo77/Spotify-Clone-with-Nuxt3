import SpotifyWebApi from "spotify-web-api-node";


export default defineNuxtPlugin(async  nuxtApp=>{
    const spotifyApi=new SpotifyWebApi()
    const {access_token}=useStates()
    spotifyApi.setAccessToken(access_token.value)
    nuxtApp.provide('spotifyApi',spotifyApi)
})