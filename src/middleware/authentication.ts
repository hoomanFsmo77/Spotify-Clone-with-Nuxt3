import {User_Information} from "~/utils/Types";

export default defineNuxtRouteMiddleware(async (to,from)=>{
    if(process.server)return
    if(process.client){
        const {$spotifyApi}=useNuxtApp()
        const isLogin=useState('isLogin')
        const access_token=useState('accessToken')
        const userData=useState<User_Information>('userData',()=>null)
        const userDataFetchFlag=useState<boolean>('userDataFetchFlag',()=>false)
        const errorModalFlag=useState<boolean>('errorModalFlag',()=>false)

        if(isLogin.value){
            $spotifyApi.setAccessToken(access_token.value)
            $spotifyApi.getMe().
            then((res:any) => {
                userData.value = res.body
                userDataFetchFlag.value=true
                errorModalFlag.value=false
            }).
            catch((err:any)=>{
                errorModalFlag.value=true
            })

        }else{
            return navigateTo('/login')
        }
    }
})