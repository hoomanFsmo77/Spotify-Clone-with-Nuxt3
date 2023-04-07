
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

        }catch (err) {
            console.log(err)
        }


    })


    return{
        showSectionData,
        showSectionFlag
    }
}
export const useFollowedArtist=()=>{
    const {$spotifyApi}=useNuxtApp()
    const followedSectionData=reactive({
        total:null as number|null,
        artistsData:[] as any[]
    })
    const followedSectionFlag=ref<boolean>(false)

    onMounted(async ()=>{
        followedSectionFlag.value=false
        try {
            const followedFetchData:{body:SpotifyApi.ArtistSearchResponse}=await $spotifyApi.getFollowedArtists()
            followedSectionData.total=followedFetchData.body.artists.total
            followedFetchData.body.artists.items.forEach(item=>{
                followedSectionData.artistsData.push({
                    id:item.id,
                    name:item.name,
                    images:item.images
                })
            })
            followedSectionFlag.value=true
        }catch (err) {
            console.log(err)
        }



    })





    return{
        followedSectionFlag,followedSectionData
    }
}
export const useRelatedSong=(props:{id:string,name:string})=>{
    const {$spotifyApi}=useNuxtApp()
    const artistTrackData=reactive({
        flag:false as boolean,
        data:[] as any[]
    })

    onMounted(async ()=>{
        artistTrackData.flag=false
        try {
            const artistTrack=await $spotifyApi.getArtistTopTracks(props.id,'US')
            artistTrackData.data=artistTrack.body.tracks
            artistTrackData.flag=true
        }catch (err) {
            console.log(err)
        }


    })



    return{
        artistTrackData
    }
}
export const useRecommendation=(props:{id:string,name:string,images:any[]}[])=>{
    const {$spotifyApi}=useNuxtApp()
    const recommendationData=useState<any[]>('recommendationData',()=>[])
    const recommendationFlag=useState('recommendationFlag',()=>false)

    onMounted(async ()=>{
        recommendationFlag.value=false
        const seedArtist:string[]=props.map(item=>item.id).slice(0,2)
        try {
            const recommendSongFetch=await $spotifyApi.getRecommendations({limit:4,seed_artists:seedArtist,seed_genres:'classical,country',seed_tracks:'0c6xIDDpzE81m2q797ordA'})
            recommendationData.value=recommendSongFetch.body.tracks
            recommendationFlag.value=true
        }catch (err) {
            console.log(err)
        }

    })





    return{
        recommendationData,recommendationFlag
    }
}
export const useNewReleases=()=>{
    const {$spotifyApi}=useNuxtApp()
    const newReleaseData=useState<any[]>('newReleaseData',()=>[])
    const newReleaseFlag=useState('newReleaseFlag',()=>false)

    onMounted(async ()=>{
        newReleaseFlag.value=false
        try {
            const newReleaseFetch=await $spotifyApi.getNewReleases({limit:4})
            newReleaseData.value=newReleaseFetch.body.albums.items
            newReleaseFlag.value=true
        }catch (err) {
            console.log(err)
        }
    })

    return{
        newReleaseData,newReleaseFlag
    }
}
export  const usePlaylist=()=>{
    const {$spotifyApi}=useNuxtApp()
    const playListData=useState<any[]>('playListData',()=>[])
    const playListFlag=useState('playListFlag',()=>false)

    onMounted(async ()=>{
        playListFlag.value=false
        try {
            const playlistFetchData=await $spotifyApi.getUserPlaylists({limit:4})
            playListData.value=playlistFetchData.body.items
            playListFlag.value=true
        }catch (err) {
            console.log(err)
        }


    })

    return{
        playListFlag,playListData

    }
}
