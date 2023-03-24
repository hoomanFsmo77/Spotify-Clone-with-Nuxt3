import {User_Information} from "~/utils/Types";

export default defineNuxtRouteMiddleware((to,from)=>{
    const {$spotifyApi}=useNuxtApp()
    const userData=useState<User_Information>('userData',()=>null)
    const userDataFetchFlag=useState<boolean>('userDataFetchFlag',()=>false)
    const isLogin=useState('isLogin')
    const {access_token}=useStates()
    if(!isLogin.value){
        return navigateTo({
            name:'LOGIN'
        })
    }else{
        $spotifyApi.setAccessToken(access_token.value)
        $spotifyApi.getMe().then((res:any) => {
            userData.value = res.body
            userDataFetchFlag.value=true
        })
    }
})