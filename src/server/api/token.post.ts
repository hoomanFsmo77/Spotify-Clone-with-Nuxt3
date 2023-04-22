import {getCookie, readBody, setCookie} from "h3";
// @ts-ignore
import SpotifyApi from 'spotify-web-api-node'


export default defineEventHandler(async ev=>{
    const {client_id,redirect_uri,client_secret}=useRuntimeConfig()
    const body=await readBody(ev)
    const spotifyAccessTokenCookie=getCookie(ev,'spotify_access_token')
    const spotifyApi=new SpotifyApi({
        clientId:client_id,
        clientSecret:client_secret,
        redirectUri:redirect_uri
    })


    if(spotifyAccessTokenCookie){
        return {
            access_token:spotifyAccessTokenCookie
        }
    } else if(!body){
        return createError({
            statusCode:501,
            statusMessage:'missing required code'
        })
    }else{
        try {
            const data=await spotifyApi.authorizationCodeGrant(body)
            const { expires_in, access_token, refresh_token,scope,token_type } = data.body;
            setCookie(ev,'spotify_access_token',access_token,{
                secure:true,
                httpOnly:true,
                maxAge:expires_in
            })
            return {
                refresh_token,access_token
            }
        }catch (err) {
            console.log(err)
        }
    }







})