import {getHashParams} from "~/utils/Helper";

export const useAuth=()=>{
    const {public:{endpoint}}=useRuntimeConfig()
    const params = getHashParams();
    const access_token=useState('access_token')
    const isLogin=useState('isLogin')
    onMounted(async ()=>{
        try {
            const auth:any=await $fetch(endpoint.login,{
                method:'POST',
                body:{authorization:params?.access_token}
            })
            access_token.value=auth.token
            isLogin.value=true
            navigateTo('/')
        }catch (e:any) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Page Not Found',
                fatal:true
            })
        }
    })

}