import {defineStore} from "pinia";
interface State {
    deviceId:string,
    uri:string,
    id: string,
    name:string,
    artist:string,
    image:string
}


export const Music=defineStore('music',{
    state:():State=>{
        return{
            deviceId:'',
            uri:'',
            id:'' ,
            name:'' ,
            artist:'' ,
            image:''
        }
    },
    getters:{
        getTrackId(state){
            return state.id
        },
        getTrackFullInfo(state){
            return state
        }

    },
    actions:{
        async setTrackDetail(){
            const {$player,$spotifyApi}=useNuxtApp()
            try {
                const trackDataFetch=await $spotifyApi.getTrack(this.id)
                this.uri=trackDataFetch.body.uri
                console.log(this.uri)
                this.name=trackDataFetch.body.name
                if(trackDataFetch.body.artists.length>1){
                    this.artist=trackDataFetch.body.artists[0].name
                }else{
                    this.artist=trackDataFetch.body.artists.map((item:any)=>item.name).join(', ')
                }
                this.image=trackDataFetch.body.album.images.filter((item:any)=>item.height===64)[0].url
            }catch (err) {
                console.log(err)
            }
        },
        async setInitialTrack(){
            const {$player,$spotifyApi}=useNuxtApp()
            try {
                const recentlyPlayedFetch=await $spotifyApi.getMyRecentlyPlayedTracks({limit:1})
                this.uri=recentlyPlayedFetch.body.items[0].context.uri
                this.id=recentlyPlayedFetch.body.items[0].track.id
                this.name=recentlyPlayedFetch.body.items[0].track.name
                this.artist=recentlyPlayedFetch.body.items[0].track.artists.map((item:any)=>item.name).join(', ');
                this.image=recentlyPlayedFetch.body.items[0].track.album.images.filter((item:any)=>item.height===64)[0].url
            }catch (err) {
                console.log(err)
            }
        },
        async play(){
            const {$player,$spotifyApi}=useNuxtApp()
            try {
                const play=await $spotifyApi.play({
                    context_uri:this.uri,
                    position_ms:0,
                    offset: {
                        position: 5
                    }
                })
                console.log(play)

            }catch (err) {
                console.log(err)
            }

        }
    },
})