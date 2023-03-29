

export const useRecently=()=>{
    const {$spotifyApi}=useNuxtApp()
    const recentlyPlayData=useState<any[]>('recentlyPlayData',()=>[])
    onMounted(async ()=>{
        try {
            const fetchRecentPlayData=await $spotifyApi.getUserPlaylists()
            recentlyPlayData.value=fetchRecentPlayData.body.items
        }catch (err) {
            console.log(err)
        }

    })


    return{
        recentlyPlayData
    }
}