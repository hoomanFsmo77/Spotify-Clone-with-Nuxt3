import {getCookie} from "~/composables/useHelper";


export const useIndex= ()=>{
    const userData=ref<any>({})
    const access_token=getCookie('access_token')
    const route=useRoute()
    onMounted(()=>{
        if(!access_token) {
            return navigateTo({
                name:'Login'
            })
        }

    })
    watch(
        ()=>route.name,
        ()=>{
            if(access_token) {
                $fetch<any>('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': 'Bearer ' + access_token
                    }
                }).then(res => {
                    userData.value = res
                })
            }
        },
        {immediate:true}
    )
    const getTrack = () => {
        $fetch('https://api.spotify.com/v1/search?include_external=audio&q=artist&type=album',{
            headers:{Authorization:'Bearer ' + access_token,}
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    return{
        userData,getTrack
    }
}