interface Props{
    artists:{id:string,name:string}[] | string
    trackName:string,
    link:string,
    images:any[],
    disableSong:boolean
}

export const useMusicBox=(props:Props)=>{
    const play=reactive({
        flag:false as boolean
    })
    const artist=reactive({
        image:'' as string,
        flag:false as boolean
    })
    const {$spotifyApi}=useNuxtApp()

    const filterImage=(images:SpotifyApi.SingleArtistResponse['images'],size:number)=>{
        const target=images.filter((item)=>item.height===size)[0]
        return target.url
    }

    const getArtistImage = async () => {
        artist.flag=false
      try {
          // @ts-ignore
          const artistData:{body:SpotifyApi.SingleArtistResponse}=await $spotifyApi.getArtist( props.artists[0]?.id)
         artist.image=filterImage(artistData.body.images,320)
          artist.flag=true
      }catch (err) {
          console.log(err)
      }
    }
    onMounted(()=>{
        if(!props.images){
            getArtistImage()
        }

    })

    const changePlayStatus = () => {
        play.flag=!play.flag
    }


    return{
        artist,changePlayStatus,play,filterImage
    }
}