
export const useDashboard= ()=>{
    const {$spotifyApi}=useNuxtApp()

    const getTrack = () => {
        $spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
            function(data:any) {
                console.log('Artist albums', data.body);
            },
            function(err:any) {
                console.error(err);
            }
        );
    }

    return{
        getTrack
    }
}