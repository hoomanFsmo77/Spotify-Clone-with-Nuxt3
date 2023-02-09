import SpotifyWebApi from "spotify-web-api-node";
import {User_Information} from "~/composables/useTypes";


export const useIndex= ()=>{
    const spotifyApi=new SpotifyWebApi()
    const userData=useState<User_Information>('userData')
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