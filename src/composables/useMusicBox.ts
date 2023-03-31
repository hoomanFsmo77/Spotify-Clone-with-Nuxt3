

export const useMusicBox=(props:{songData:SpotifyApi.UsersRecentlyPlayedTracksResponse['items'][0]})=>{
    const play=reactive({
        flag:false as boolean
    })
    const artist=reactive({
        image:'' as string,
        flag:false as boolean
    })
    const {$spotifyApi}=useNuxtApp()

    const filterImage=(images:SpotifyApi.SingleArtistResponse['images'])=>{
        const target=images.filter((item)=>item.height===320)[0]
        return target.url
    }

    const getArtistImage = async () => {
        artist.flag=false
      try {
          const artistData:{body:SpotifyApi.SingleArtistResponse}=await $spotifyApi.getArtist(props.songData.track.artists[0].id)
         artist.image=filterImage(artistData.body.images)
          artist.flag=true
      }catch (err) {
          console.log(err)
      }
    }
    onMounted(()=>{
        getArtistImage()
    })

    const changePlayStatus = () => {
        play.flag=!play.flag
    }


    return{
        artist,changePlayStatus,play
    }
}