import {useMusicStore} from "~/composables/useStore";

interface Props{
    artists:{id:string,name:string}[] | string
    trackName:string,
    link:string,
    images:any[],
    routeParam:string,
    disableSong:boolean,
    size:number,
    trackId:string

}

export const useMusicBox=(props:Props)=>{
    const {musicStore}=useMusicStore()
    const {$spotifyApi}=useNuxtApp()
    const play=reactive({
        flag:false as boolean
    })
    const artist=reactive({
        image:'' as string,
        flag:false as boolean
    })


    const filterImage=(images:SpotifyApi.SingleArtistResponse['images'],size:number)=>{
        const target=images.filter((item)=>item.height===size)[0]
        if(target?.url){
            return target?.url || ''
        }else{
            return  ''
        }

    }

    const getArtistImage = async () => {
        artist.flag=false
      try {
          const trackData=await $spotifyApi.getTrack(props.routeParam)
          artist.image=filterImage(trackData.body.album.images,300)
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
        musicStore.$patch({id:props.trackId})
        musicStore.setTrackDetail()
        musicStore.play()
    }


    return{
        artist,changePlayStatus,play,filterImage
    }
}