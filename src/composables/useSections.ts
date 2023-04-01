

export const useRecently=()=>{
    const {$spotifyApi}=useNuxtApp()
    const recentlyPlayData=useState<any[]>('recentlyPlayData',()=>[])
    const recentlyPlayFlag=useState('recentlyPlayFlag',()=>false)
    onMounted(async ()=>{
        recentlyPlayFlag.value=false
        try {
            const fetchRecentPlayData=await $spotifyApi.getMyRecentlyPlayedTracks({limit:20})
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


export const useAudiobook=()=>{
    const {access_token}=useStates()
    const  audioBookData=useState<any[]>('AudioBookData',()=>[])
    const  audioBookFlag=useState('AudioBookFlag',()=>false)

    onMounted(async ()=>{
        audioBookFlag.value=false
        try {
            const audiobookFetchData:any=await $fetch(`https://api.spotify.com/v1/audiobooks`,{
                headers:{'Authorization':`Bearer ${access_token.value}`, 'content-type':'application/json'},
                query:{ids:'5EfZ7blnJlO4eglkROSWwJ,2FUkZSFv3z9uxygx9s6E8h,7iHfbu1YPACw6oZPAFJtqe,1IcM9Untg6d3ktuwObYGcN'}
            })
            audioBookFlag.value=true
            audioBookData.value=audiobookFetchData.audiobooks
        }catch (err) {
            console.log(err)
        }

    })

    return{
        audioBookData,
        audioBookFlag
    }
}

export const useShows=()=>{
    const {$spotifyApi}=useNuxtApp()
    const showSectionData=useState<any[]>('showSectionData',()=>[])
    const showSectionFlag=useState('showSectionFlag',()=>false)

    onMounted(async ()=>{
        showSectionFlag.value=false
        try {
            const showsData=await $spotifyApi.getShows(['5CfCWKI5pZ28U0uOzXkDHe','5as3aKmN2k11yfDDDSrvaZ','2hqSzWW1GFAyugtjNxfgcR','6ALnjYlFQeEOmeRwYoRlIh'])
            showSectionFlag.value=true
            showSectionData.value=showsData.body.shows
            console.log(showSectionData.value)

        }catch (err) {
            console.log(err)
        }


    })


    return{
        showSectionData,
        showSectionFlag
    }
}
