import SpotifyWebApi from "spotify-web-api-node";
import {User_Information} from "~/utils/Types";

export default defineNuxtRouteMiddleware((to,from)=>{
    const userData=useState<User_Information>('userData',()=>null)
    const isLogin=useState('isLogin')
    const spotifyApi=new SpotifyWebApi()
    const access_token=useState<string>('access_token')
    if(!isLogin.value){
        return navigateTo({
            name:'login'
        })
    }else{
        spotifyApi.setAccessToken(access_token.value)
        spotifyApi.getMe().then(res => {
            userData.value = res.body
        })
    }
})