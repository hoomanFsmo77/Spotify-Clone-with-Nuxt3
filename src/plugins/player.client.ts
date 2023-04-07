import {SpotifyPlayer} from "spotify-web-playback-ts";


export default defineNuxtPlugin(async nuxtApp=>{
    const {access_token}=useStates()
    const player = await SpotifyPlayer.init(document, 'Browser Player!', 0.5, cb => cb(access_token.value))
    player.connect().then((success:any) => {
        if (success) {console.log('The Web Playback SDK successfully connected to Spotify!');}})
    nuxtApp.provide('player',player)
})