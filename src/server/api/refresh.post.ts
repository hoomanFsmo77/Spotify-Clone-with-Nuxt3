import {readBody, setCookie} from "h3";
import SpotifyApi from "spotify-web-api-node";

export default defineEventHandler(async ev=>{
    const refresh_token=await readBody(ev)
    const {client_id,redirect_uri,client_secret}=useRuntimeConfig()

    const spotifyApi=new SpotifyApi({
        clientId:client_id,
        clientSecret:client_secret,
        redirectUri:redirect_uri,
        refreshToken:refresh_token
    })
    try {
        const data=await spotifyApi.refreshAccessToken()
        const {access_token,expires_in,refresh_token,token_type,scope}=data.body
        setCookie(ev,'spotify_access_token',access_token,{
            secure:true,
            httpOnly:true,
            maxAge:expires_in
        })
        return access_token
    }catch (err) {
        console.log(err)

    }

})