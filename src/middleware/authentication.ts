import {User_Information} from "~/utils/Types";

export default defineNuxtRouteMiddleware(async (to,from)=>{
    const {public:{endpoint}}=useRuntimeConfig()
    const {$spotifyApi}=useNuxtApp()
    const userData=useState<User_Information>('userData',()=>null)
    const userDataFetchFlag=useState<boolean>('userDataFetchFlag',()=>false)
    const errorModalFlag=useState<boolean>('errorModalFlag',()=>false)
    const isLogin=useState('isLogin')
    const {access_token}=useStates()
    if(!isLogin.value){
        const logout=await $fetch(endpoint.logout,{method:'POST'})
        return navigateTo({name:'LOGIN'})
    }else{
        $spotifyApi.setAccessToken(access_token.value)
        $spotifyApi.getMe().
        then((res:any) => {
            userData.value = res.body
            userDataFetchFlag.value=true
            errorModalFlag.value=false
        }).
        catch(()=>{
            errorModalFlag.value=true
        })
    }
})