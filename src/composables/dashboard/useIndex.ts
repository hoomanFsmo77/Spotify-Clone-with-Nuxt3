import SpotifyWebApi from "spotify-web-api-node";


export const useIndex= ()=>{
    const spotifyApi=new SpotifyWebApi()
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
        getTrack
    }
}