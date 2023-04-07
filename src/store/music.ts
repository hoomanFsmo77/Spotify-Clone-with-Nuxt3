import {defineStore} from "pinia";
interface State {
    id: string,
    name:string,
    artist:string,
    image:string
}


export const Music=defineStore('music',{
    state:():State=>{
        return{
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
        }

    }
})