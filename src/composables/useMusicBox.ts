

export const useMusicBox=(props:{songData:SpotifyApi.UsersRecentlyPlayedTracksResponse['items'][0]})=>{
    const filterImage=computed<string>(()=>{
        const target=props.songData.track.album.images.filter(item=>item.height===300)[0]
        return target.url
    })



    return{
        filterImage
    }
}