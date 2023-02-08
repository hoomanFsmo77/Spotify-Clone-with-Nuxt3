import {getCookie} from "~/composables/useHelper";
import SpotifyWebApi from "spotify-web-api-node";
import {User_Information} from "~/composables/useTypes";


export const useIndex= ()=>{
    const spotifyApi=new SpotifyWebApi()
    const userData=useState<User_Information>('userData',()=>null)
    const access_token=getCookie('access_token')
    const route=useRoute()
    onMounted(()=>{
        if(!access_token){
            return navigateTo({
                name:'login'
            })
        }
    })

    watch(
        ()=>route.name,
        ()=>{
            if(access_token) {
                spotifyApi.setAccessToken(access_token)
                spotifyApi.getMe().then(res => {
                    userData.value = res.body
                })
            }
        },
        {immediate:true}
    )
    const getTrack = () => {
        spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
            function(data) {
                console.log('Artist albums', data.body);
            },
            function(err) {
                console.error(err);
            }
        );
    }

    return{
        userData,getTrack
    }
}