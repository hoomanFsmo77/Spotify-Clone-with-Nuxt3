

export const useRecently=()=>{
    const {$spotifyApi}=useNuxtApp()
    const recentlyPlayData=useState<any[]>('recentlyPlayData',()=>[])
    const recentlyPlayFlag=useState('recentlyPlayFlag',()=>false)
    onMounted(async ()=>{
        recentlyPlayFlag.value=false
        try {
            const fetchRecentPlayData=await $spotifyApi.getMyRecentlyPlayedTracks({limit:4})
            recentlyPlayData.value=fetchRecentPlayData.body.items
        }catch (err) {
            console.log(err)
        }finally {
            recentlyPlayFlag.value=true
        }

    })


    return{
        recentlyPlayData,recentlyPlayFlag
    }
}