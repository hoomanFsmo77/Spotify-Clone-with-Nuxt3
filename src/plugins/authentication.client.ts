
export default defineNuxtPlugin(async nuxtApp=>{
    const {isLogin,access_token}=useStates()
    const refreshToken=localStorage.getItem('spotify-refresh-token')
    if(refreshToken){
        try {
            const token=await $fetch<any>('/api/token',{method:'POST'})
            access_token.value=token.access_token
            isLogin.value=true
        }catch (err) {
            try {
                const refreshNewToken=await $fetch<any>('/api/refresh',{
                    method:'POST',body:refreshToken
                })
                access_token.value=refreshNewToken
                isLogin.value=true
            }catch (err) {
                isLogin.value=false
            }
        }
    }else{
        isLogin.value=false
    }


})