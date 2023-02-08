import {getHashParams, setCookie} from "~/composables/useHelper";
import SpotifyWebApi from "spotify-web-api-node";

export const useAuth=()=>{
    const params = getHashParams();
    const spotifyApi=new SpotifyWebApi()
    onMounted(()=>{
        const access_token = params?.access_token
        if(access_token){
            setCookie('access_token',access_token)
            spotifyApi.setAccessToken(access_token)
            navigateTo('/')
        }else{
            throw createError({
                message:'page not found',
                statusCode:404
            })
        }

    })

}